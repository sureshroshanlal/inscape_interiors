#!/bin/bash

# Asset Download Script
# Run this script when you have network access to download all original assets

echo "Downloading assets from tashafreeman.co.uk..."

cd "$(dirname "$0")"
mkdir -p public/images/{projects,about,clients}

# Logo
curl -sL "https://tashafreeman-co-uk-2.nimbus-cdn.uk/wp-content/uploads/2024/05/logo-tasha-freeman.svg?nv=e1e5fddf-57e2-4d01-a2b2-d52123067d9e" -o public/images/logo.svg

# Homepage Hero
curl -sL "https://tashafreeman-co-uk-2.nimbus-cdn.uk/wp-content/uploads/2024/06/homepage-hero-banner-01e.png?format=webp&nv=e1e5fddf-57e2-4d01-a2b2-d52123067d9e" -o public/images/hero-banner.jpg

# Homepage Panels
curl -sL "https://tashafreeman-co-uk-2.nimbus-cdn.uk/wp-content/uploads/2024/06/homepage-panel-01b-777x1024.jpg?format=webp&nv=e1e5fddf-57e2-4d01-a2b2-d52123067d9e" -o public/images/panel-1.jpg

curl -sL "https://tashafreeman-co-uk-2.nimbus-cdn.uk/wp-content/uploads/2024/06/homepage-panel-02b-777x1024.jpg?format=webp&nv=e1e5fddf-57e2-4d01-a2b2-d52123067d9e" -o public/images/panel-2.jpg

# Homepage Interiors Image
curl -sL "https://tashafreeman-co-uk-2.nimbus-cdn.uk/wp-content/uploads/2024/06/homepage-interiors-01b-835x1024.jpg?format=webp&nv=e1e5fddf-57e2-4d01-a2b2-d52123067d9e" -o public/images/interiors-side.jpg

# Homepage Wide Image
curl -sL "https://tashafreeman-co-uk-2.nimbus-cdn.uk/wp-content/uploads/2024/06/homepage-widescreen-01C.jpg?format=webp&nv=e1e5fddf-57e2-4d01-a2b2-d52123067d9e" -o public/images/interiors-wide.jpg

# Projects Page Images
curl -sL "https://tashafreeman-co-uk-2.nimbus-cdn.uk/wp-content/uploads/2024/06/HERO-Kensal-Rise-Main-Photo-768x1152.jpg?format=webp&nv=e1e5fddf-57e2-4d01-a2b2-d52123067d9e" -o public/images/projects/kensal-rise.jpg

curl -sL "https://tashafreeman-co-uk-2.nimbus-cdn.uk/wp-content/uploads/2024/06/HERO-Goldbourn-Road-Main-Photo-768x1152.jpg?format=webp&nv=e1e5fddf-57e2-4d01-a2b2-d52123067d9e" -o public/images/projects/golbourne-road.jpg

curl -sL "https://tashafreeman-co-uk-2.nimbus-cdn.uk/wp-content/uploads/2024/06/FreemanWhitehouse-CG-4-768x1180.jpg?format=webp&nv=e1e5fddf-57e2-4d01-a2b2-d52123067d9e" -o public/images/projects/cassandra-goad.jpg

curl -sL "https://tashafreeman-co-uk-2.nimbus-cdn.uk/wp-content/uploads/2024/06/20180502-PrincedaleRd-079-768x1126.jpg?format=webp&nv=e1e5fddf-57e2-4d01-a2b2-d52123067d9e" -o public/images/projects/holland-park.jpg

curl -sL "https://tashafreeman-co-uk-2.nimbus-cdn.uk/wp-content/uploads/2024/06/NathaliePriemPhotography-FreemanWhitehouse-ElginCrescent-HighResolution-12-768x1152.jpg?format=webp&nv=e1e5fddf-57e2-4d01-a2b2-d52123067d9e" -o public/images/projects/elgin-crescent.jpg

curl -sL "https://tashafreeman-co-uk-2.nimbus-cdn.uk/wp-content/uploads/2024/06/Tulip-table-sliding-doors-768x1152.jpg?format=webp&nv=e1e5fddf-57e2-4d01-a2b2-d52123067d9e" -o public/images/projects/notting-hill.jpg

curl -sL "https://tashafreeman-co-uk-2.nimbus-cdn.uk/wp-content/uploads/2024/06/HERO-Arlington-Road-768x1180.jpg?format=webp&nv=e1e5fddf-57e2-4d01-a2b2-d52123067d9e" -o public/images/projects/camden.jpg

# About Page Images
curl -sL "https://tashafreeman-co-uk-2.nimbus-cdn.uk/wp-content/uploads/2024/06/about-tasha-freeman-interiors-june-796x1024.png?format=webp&nv=e1e5fddf-57e2-4d01-a2b2-d52123067d9e" -o public/images/about/about-hero.jpg

curl -sL "https://tashafreeman-co-uk-2.nimbus-cdn.uk/wp-content/uploads/2024/06/about-the-style-02b.png?format=webp&nv=e1e5fddf-57e2-4d01-a2b2-d52123067d9e" -o public/images/about/style-1.jpg

curl -sL "https://tashafreeman-co-uk-2.nimbus-cdn.uk/wp-content/uploads/2024/06/about-the-style-01a.jpg?format=webp&nv=e1e5fddf-57e2-4d01-a2b2-d52123067d9e" -o public/images/about/style-2.jpg

curl -sL "https://tashafreeman-co-uk-2.nimbus-cdn.uk/wp-content/uploads/2024/06/about-the-style-03-762x1024.jpg?format=webp&nv=e1e5fddf-57e2-4d01-a2b2-d52123067d9e" -o public/images/about/style-3.jpg

# Contact/Studio Logo
curl -sL "https://tashafreeman-co-uk-2.nimbus-cdn.uk/wp-content/uploads/2025/11/logo-studio55-roundal@2x.png?format=webp&nv=e1e5fddf-57e2-4d01-a2b2-d52123067d9e" -o public/images/studio-logo.png

echo "✓ Assets downloaded successfully!"
echo "Note: Replace client logos in public/images/clients/ with your own"