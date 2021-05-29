#!/bin/bash
LINKS="$(grep -r 'http://\|https://' ./docs | grep -oP 'http.*' | sed 's| .*||;s|).*||;s|`.*||')"
mapfile -t LINKS <<< "$LINKS"
for link in "${LINKS[@]}"
do
    if echo "$link" | grep -q "yourdomain\|geizhals.eu\|192.168.178.144\|internal.*address\|packages.cisofy.com\|duckdns.org"; then
        echo "Not testing $link"
        continue
    fi
    if [ "$(curl -sLI "$link" -o /dev/null -w "%{http_code}\n")" != 200 ]; then
        echo "Invalid is: $link"
        INVALID_LINKS+="$link\n"
    else
        echo "Valid is: $link"
    fi
done
if [ -n "$INVALID_LINKS" ]; then
    echo '################################'
    echo 'Invalid Links:'
    echo -e "$INVALID_LINKS"
    exit 1
fi
