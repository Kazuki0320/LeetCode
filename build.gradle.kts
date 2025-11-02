plugins {
    java
    application
    checkstyle
}

repositories {
    mavenCentral()
}

java {
    toolchain {
        languageVersion.set(JavaLanguageVersion.of(17))
    }
}

application {
    mainClass.set("helloworld.App")
}

/**
 * ✅ JUnit5 を確実に検出＆詳細ログ＆レポート出力
 *  - CLIで各テストの pass/skip/fail を表示
 *  - System.out/err も表示
 */
tasks.withType<Test>().configureEach {
    useJUnitPlatform()

    testLogging {
        events(
            org.gradle.api.tasks.testing.logging.TestLogEvent.PASSED,
            org.gradle.api.tasks.testing.logging.TestLogEvent.SKIPPED,
            org.gradle.api.tasks.testing.logging.TestLogEvent.FAILED,
            org.gradle.api.tasks.testing.logging.TestLogEvent.STANDARD_OUT,
            org.gradle.api.tasks.testing.logging.TestLogEvent.STANDARD_ERROR,
        )
        exceptionFormat = org.gradle.api.tasks.testing.logging.TestExceptionFormat.FULL
        showExceptions = true
        showCauses = true
        showStackTraces = true
        showStandardStreams = true
    }
}

/**
 * ✅ LeetCode 問題コード用の独立ソースセット（テストは含めない）
 *  - `LeetCode75/**` を “問題の解答ソース” としてビルド対象にする
 *  - `**/*Test.java` は除外（テストは test ソースセットで拾う）
 */
sourceSets {
    create("problems") {
        java.setSrcDirs(listOf("LeetCode75"))
        java.exclude("**/*Test.java")
    }

    // ✅ テストソースセットに、標準の src/test/java と LeetCode の *Test.java を両方含める
    named("test") {
        java.srcDir("src/test/java")
        java.srcDir("LeetCode75")
        java.include("**/*Test.java")
        // problems の出力をテストのクラスパスに追加（テストから解答クラスを参照できるように）
        compileClasspath += sourceSets["problems"].output
        runtimeClasspath += sourceSets["problems"].output
    }
}

/**
 * ✅ LeetCode 問題コードのコンパイル（-Xlint 付き）
 *  - 依存なしでコンパイル
 *  - 出力は build/classes/problems 以下
 */
tasks.register<JavaCompile>("compileProblems") {
    source = sourceSets["problems"].java
    classpath = files() // 依存なし
    destinationDirectory.set(layout.buildDirectory.dir("classes/problems"))
    options.release.set(17)
    options.compilerArgs.addAll(listOf("-Xlint:all", "-Xlint:deprecation", "-Xlint:unchecked"))
}

/**
 * ✅ `check` 実行時に問題コードのビルド＆Checkstyle も走らせる
 */
tasks.named("check").configure {
    dependsOn("compileJava")
    dependsOn("compileProblems")
    dependsOn("checkstyleMain")
}

checkstyle {
    toolVersion = "10.12.4"
    configFile = file("config/checkstyle/checkstyle.xml")
    isIgnoreFailures = false
}

/**
 * ✅ 依存：JUnit5 の API と Engine を明示
 */
dependencies {
    testImplementation("org.junit.jupiter:junit-jupiter-api:5.10.2")
    testRuntimeOnly("org.junit.jupiter:junit-jupiter-engine:5.10.2")
}

/**
 * ✅ テストは必ず先に problems をビルドし、その出力をクラスパスへ追加
 */
tasks.named<Test>("test").configure {
    dependsOn("compileProblems")
    classpath = classpath.plus(sourceSets["problems"].output)
}

// ✅ test のコンパイル前にも problems をビルドしておく（IDE/言語サーバの補完安定化）
tasks.named<JavaCompile>("compileTestJava").configure {
    dependsOn("compileProblems")
}
