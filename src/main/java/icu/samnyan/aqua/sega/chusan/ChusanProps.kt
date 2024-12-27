package icu.samnyan.aqua.sega.chusan

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.context.annotation.Configuration

@Configuration
@ConfigurationProperties(prefix = "game.chusan")
class ChusanProps {
    var teamName: String? = null
}