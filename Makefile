login:
	ada credentials update --account 812168580665 --role Admin --once

sync:
	gh repo sync kuhe/aws-sdk-js -b master
