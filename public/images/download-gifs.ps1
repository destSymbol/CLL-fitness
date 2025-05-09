$gifUrls = @{
    "chest.gif" = "https://media.giphy.com/media/uoVUPXJgM1nEBjnIMl/giphy.gif"
    "back.gif" = "https://media.giphy.com/media/3oeSAXH2uAGDaHcYMg/giphy.gif"
    "shoulders.gif" = "https://media.giphy.com/media/d3MKHrkOuY8cOli0/giphy.gif"
    "arms.gif" = "https://media.giphy.com/media/l0HlQy9UVcJNcYQF2/giphy.gif"
    "legs.gif" = "https://media.giphy.com/media/OlQYxO6C53Doc/giphy.gif"
    "abs.gif" = "https://media.giphy.com/media/XIqCQx02E1U9W/giphy.gif"
    "core.gif" = "https://media.giphy.com/media/dlMIwDQAxXn1K/giphy.gif"
    "glutes.gif" = "https://media.giphy.com/media/3o6ZtpWvwnhf34Oj0A/giphy.gif"
}

foreach ($key in $gifUrls.Keys) {
    $url = $gifUrls[$key]
    $outFile = Join-Path -Path $PSScriptRoot -ChildPath $key
    Write-Host "Downloading $url to $outFile"
    Invoke-WebRequest -Uri $url -OutFile $outFile
} 