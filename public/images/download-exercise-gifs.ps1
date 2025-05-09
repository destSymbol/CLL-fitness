$gifUrls = @{
    "push-up.gif" = "https://media.giphy.com/media/7YCC3rjqLnCElGzgU2/giphy.gif"
    "squat.gif" = "https://media.giphy.com/media/UqTvYfMbqj6U/giphy.gif"
    "plank.gif" = "https://media.giphy.com/media/xT8qBff8cRRFf7k2u4/giphy.gif"
    "bench-press.gif" = "https://media.giphy.com/media/3o6nUQmQzEU8wGK8Cs/giphy.gif"
    "pull-up.gif" = "https://media.giphy.com/media/3o85xyXCR5WbQgEGys/giphy.gif"
    "deadlift.gif" = "https://media.giphy.com/media/DgoHgRmAzMNAA/giphy.gif"
    "military-press.gif" = "https://media.giphy.com/media/8fKUpCfjTMQUUEXLMk/giphy.gif"
    "barbell-row.gif" = "https://media.giphy.com/media/KblWQjY3Th43WiKg7U/giphy.gif"
    "fitness-hero.gif" = "https://media.giphy.com/media/3oriNZoNvn73MZaFYk/giphy.gif"
    
    # 肌群GIF
    "chest.gif" = "https://media.giphy.com/media/QBGfW8HqzXzYDojCqo/giphy.gif"
    "back.gif" = "https://media.giphy.com/media/SvFoeJoblnjFbwGJFK/giphy.gif"
    "shoulders.gif" = "https://media.giphy.com/media/dVaGQGQwzECXjhUXA1/giphy.gif"
    "arms.gif" = "https://media.giphy.com/media/QWpK88H1g9PtmtQly1/giphy.gif"
    "legs.gif" = "https://media.giphy.com/media/YSlD4EbzcPIiRmY9Sw/giphy.gif"
    "abs.gif" = "https://media.giphy.com/media/fWx0q1IVdYA4TBeYmj/giphy.gif"
    "core.gif" = "https://media.giphy.com/media/iJaxY8yBGwKpQtXgTZ/giphy.gif"
    "glutes.gif" = "https://media.giphy.com/media/dyRJCk6MjqrMZUkCQx/giphy.gif"
}

foreach ($key in $gifUrls.Keys) {
    $url = $gifUrls[$key]
    $outFile = Join-Path -Path $PSScriptRoot -ChildPath $key
    Write-Host "下载 $url 到 $outFile"
    Invoke-WebRequest -Uri $url -OutFile $outFile
} 