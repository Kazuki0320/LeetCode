plugins {
    java
    application
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


