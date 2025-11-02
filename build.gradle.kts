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

tasks.withType<Test> {
    useJUnitPlatform()
}

// LeetCode の問題配下 (LeetCode75/**) に置いた .java もコンパイル対象にする
sourceSets {
    create("problems") {
        java.setSrcDirs(listOf("LeetCode75"))
    }
}

// 問題用の Java をビルドしてエラー検出 (-Xlint を有効化)
tasks.register<JavaCompile>("compileProblems") {
    source = sourceSets["problems"].java
    classpath = files() // 依存なし
    destinationDirectory.set(layout.buildDirectory.dir("classes/problems"))
    options.release.set(17)
    options.compilerArgs.addAll(listOf("-Xlint:all", "-Xlint:deprecation", "-Xlint:unchecked"))
}

// `gradle check` でエラーチェックが走るように
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


