angular.module('WordApp.config', [])

// Replace with your Wordpress Blog WP REST API url 
.constant('WORDPRESS_API_URL', 'https://errorcybernews.com/wp-json/wp/v2/')

// Replace with your Google Project Number https://documentation.onesignal.com/v2.0/docs/android-generating-a-gcm-push-notification-key
.constant('GOOGLE_PROJECT_NUMBER', '866600527991')

// Replace with your OneSignal AppId https://documentation.onesignal.com/docs/phonegap-sdk-installation#2-add-required-code
.constant('ONESIGNAL_APP_ID', '9d2dbca1-5ba0-4657-bb08-c3470c2b29f5')

// Change color your Ionic application to light, stable, positive, calm, balanced, energized, assertive, royal or dark 
.constant('IONIC_APP_COLOR', 'positive')

// Change Posts page template to cards, cards2, list
.constant('POSTS_TEMPLATE', 'cards2')

// Replace with your Android package name and IOS app ID
.constant('ANDROID_PACKAGE_NAME', 'com.errorcybernews')
.constant('IOS_APP_ID', '')

// Replace with your Primary Email to send Feedback
.constant('PRIMARY_EMAIL', 'central@errorcybernews.com')

// Replace with email to send copy Feedback or leave empty
.constant('COPY_EMAIL', 'kernel_panic@mail2tor.com')
