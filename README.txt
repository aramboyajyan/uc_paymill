UBERCART PAYMILL INTEGRATION

Module for integration with Paymill (https://www.paymill.com/) payment
gateway.

Paymill is a payment gateway that features easy online payments. It allows
your customers pay directly on your website, accept payments in 100 currencies
and be charged only for successfully closed transactions.

It also handles the PCI compliance and handling of credit card details. The
transactions are processed on their servers and credit card information is NOT
saved to your database at all. This leaves you free from worrying about
sensitive information of your clients.

Even though Paymill does not require SSL to be installed on your site, it is
better to do so because of the customer trust. They will enter their credit
card information directly on your website and not seeing the "protected" green
address bar, might make them leave.

INSTALLATION INSTRUCTIONS

1. Just download this module and place it in any known Drupal module directory
(e.g. sites/all/modules, sites/default/modules etc.) or install it using Drush
with: drush dl uc_paymill.

2. This module requires you to download Paymill PHP Library for making calls
to Paymill and processing transactions.
Download the library and place it in sites/all/libraries so that the folder
structure looks like this:

  sites/all/libraries/paymill/
    lib/
      Services/
        Paymill/
          Apiclient/
            Curl.php
          Base.php
          Clients.php
          Exception.php
          [etc.]

GitHub project page:
https://github.com/paymill/paymill-php/
Direct download link:
https://github.com/paymill/paymill-php/archive/master.zip

3. Get your API keys in Paymill admin area and enter them in your website at
"Paymill" tab here: admin/store/settings/payment/method/credit.

You can now start using the module.

INFORMATION FOR DEVELOPERS

This is the usual transaction workflow:

- User enters his/her details at cart/checkout page
- The module will send the user information to Paymill through an HTTPS
request and receive errors or authentication token if everything went alright
- Once the user reviews and submits the order, the module will only use the
authentication token to charge the customer. Paymill will encrypt and store
the credit card details.
- Paymill responds with success message/error details if the transaction has
been processed successfully

Development sponsored by: Topsitemakers
http://www.topsitemakers.com/
