$ErrorActionPreference = "Stop"

# Quality knobs
$mp4Crf  = 22      # 18-23 is typical. Lower = better quality, bigger file.
$webmCrf = 32      # 28-35 typical. Lower = better quality, bigger file.
$threads = 8

Get-ChildItem -File -Filter *.mov | ForEach-Object {

  $inFile  = $_.FullName
  $base    = [System.IO.Path]::GetFileNameWithoutExtension($_.Name)
  $outMp4  = Join-Path $_.DirectoryName ($base + ".mp4")
  $outWebm = Join-Path $_.DirectoryName ($base + ".webm")

  Write-Host "==> $($_.Name)"

  # MP4 (H.264 + AAC)
  if (-not (Test-Path $outMp4)) {
    Write-Host "  -> MP4"
    ffmpeg -hide_banner -y -i "$inFile" `
      -map 0:v:0 -map 0:a? `
      -c:v libx264 -preset slow -crf $mp4Crf `
      -pix_fmt yuv420p -profile:v high -level 4.1 `
      -movflags +faststart `
      -c:a aac -b:a 128k `
      "$outMp4"
  } else {
    Write-Host "  -> MP4 exists, skipping"
  }

  # WebM (VP9 + Opus)
  if (-not (Test-Path $outWebm)) {
    Write-Host "  -> WEBM"
    ffmpeg -hide_banner -y -i "$inFile" `
      -map 0:v:0 -map 0:a? `
      -c:v libvpx-vp9 -b:v 0 -crf $webmCrf `
      -row-mt 1 -threads $threads `
      -pix_fmt yuv420p `
      -c:a libopus -b:a 96k `
      "$outWebm"
  } else {
    Write-Host "  -> WEBM exists, skipping"
  }

  Write-Host ""
}

Write-Host "Done."