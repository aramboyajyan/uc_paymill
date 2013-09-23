<h1>Ubercart Paymill Integration</h1>

<p>Module for integration with <a href="https://www.paymill.com/" target="_blank">Paymill</a> payment gateway.</p>

<p><a href="https://www.paymill.com/" target="_blank">Paymill</a> is a payment gateway that features easy online payments. It allows your customers pay directly on your website, accept payments in 100 currencies and be charged only for successfully closed transactions.</p>

<p>It also handles the [PCI compliance](https://www.pcisecuritystandards.org/) and handling of credit card details. The transactions are processed on their servers and credit card information is NOT saved to your database at all. This leaves you free from worrying about sensitive information of your clients.</p>

<p>Even though Paymill does not require SSL to be installed on your site, it is better to do so because of the customer trust. They will enter their credit card information directly on your website and not seeing the "protected" green address bar, might make them leave.</p>

<h3>Installation instructions</h3>

<ol>
<li>Just download this module and place it in any known Drupal module directory (e.g. <code>sites/all/modules</code>, <code>sites/default/modules</code> etc.) or install it using <a href="http://www.drush.org/" target="_blank">Drush</a> with: <code>drush dl uc_paymill</code>.</li>
<li>This module requires you to download <a href="https://github.com/paymill/paymill-php/">Paymill PHP Library</a> for making calls to Paymill and processing transactions.  Download the library and place it in <code>sites/all/libraries</code> so that the folder structure looks like this:<br>
<code>
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
</code><br>
<a href="https://github.com/paymill/paymill-php/archive/master.zip">Download link</a>.
</li>

<li>Get your API keys in Paymill admin area and enter them in your website at "Paymill" tab here: <code>admin/store/settings/payment/method/credit</code>.</li>
</ol>

<p>You can now start using the module.</p>

<h3>Information for developers</h3>

<p>This is the usual transaction workflow:</p>

<ul>
<li>User enters his/her details at <code>cart/checkout</code> page</li>
<li>The module will send the user information to Paymill through an HTTPS request and receive errors or authentication token if everything went alright</li>
<li>Once the user reviews and submits the order, the module will only use the authentication token to charge the customer. Paymill will encrypt and store the credit card details.</li>
<li>Paymill responds with success message/error details if the transaction has been processed successfully</li>
</ul>

<h4>Development sponsored by:<br><a href="http://www.topsitemakers.com/">Topsitemakers
http://www.topsitemakers.com/</a></h4>
