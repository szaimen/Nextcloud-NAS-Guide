#!/bin/bash
LINKS="$(grep -r 'http://\|https://' ./docs | grep -oP 'http.*' | sed 's| .*||;s|).*||;s|`.*||')"
echo "Found $LINKS"
echo '#####################################################'
mapfile -t LINKS <<< "$LINKS"
for link in "${LINKS[@]}"
do
    if echo "$link" | grep -q "yourdomain\|geizhals.eu\|192.168.178.144\|internal.*address\|packages.cisofy.com"
    then
        echo "Not testing $link"
        continue
    fi
    if [ "$(curl -sLI "$link" -o /dev/null -w "%{http_code}\n")" != 200 ]; then
        echo "Invalid is: $link"
        INVALID=1
    fi
done
if [ -n "$INVALID" ]; then
    exit 1
fi
