#!/bin/sh
echo "Checking if Selenium Hub is ready"
while [ "$( curl -s http://hub:4444/wd/hub/status | jq -r .value.ready )" != "true" ]
do
	sleep 1
done
echo "Selenium Hub is ready"