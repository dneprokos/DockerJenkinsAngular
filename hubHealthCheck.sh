echo "Checking if Selenium Hub is ready"

while [ "$( curl -s http://HUB:4444/wd/hub/status | jq -r .value.ready )" != "true" ]
do
	sleep 1
done

echo "Selenium Hub is ready to be used"