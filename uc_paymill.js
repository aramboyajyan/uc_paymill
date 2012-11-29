
/**
 * @file
 * JS for generating authentication tokens for Paymill.
 *
 * Created by: Topsitemakers
 * http://www.topsitemakers.com/
 */

(function($) {
  Drupal.behaviors.UCPaymill = {
    
    attach: function(context, settings) {
      // Configure Paymill bridge and define the submit button.
      window.PAYMILL_PUBLIC_KEY = settings.ucPaymill.publicKey;
      var checkoutButton = $('#edit-continue');
      var paymillPaymentMethod = 'paymill';
      var currentPaymentMethodSelector = '#edit-panes-payment-payment-method input[type="radio"]:checked';
      // Check if Paymill is initially selected.
      if ($(currentPaymentMethodSelector).val() == paymillPaymentMethod) {
        checkoutButton.unbind('click', ucPaymillSubmit).bind('click', ucPaymillSubmit);
      }
      else {
        checkoutButton.unbind('click', ucPaymillSubmit);
      }
      // Bind token generating function with the submit button.
      $('#edit-panes-payment-payment-method input[type="radio"]').change(function() {
        var currentPaymentMethod = $(currentPaymentMethodSelector).val();
        if (currentPaymentMethod == paymillPaymentMethod) {
          checkoutButton.unbind('click', ucPaymillSubmit).bind('click', ucPaymillSubmit);
        }
        else {
          checkoutButton.unbind('click', ucPaymillSubmit);
        }
      });

      /**
       * Submit handler function for generating the Paymill token.
       */
      function ucPaymillSubmit() {
        // Build app Paymill parameters for this transaction.
        var ucPaymillParams = {
          number:    '',
          exp_month: '',
          exp_year:  '',
          cvc:       '',
          amount:    '',
          currency:  ''
        };
        // Get the Paymill token
        paymill.createToken(ucPaymillParams, ucPaymillResponseHandler);
        return false;
      }

      /**
       * Function to be called upon getting the response from Paymill.
       * 
       * This function will return either 'result' in case the token was obtained
       * properly or 'errors' in case something went wrong with the data.
       */
      function ucPaymillResponseHandler(error, result) {
        if (error) {
          console.log('The following error occurred: ' + error.apierror);
        }
        else {
          console.log('The token was generated successfully.');
        }
      }

      /**
       * Translates Paymill error codes into meaningful messages.
       */
      function ucPaymillErrorDetails(error) {
        switch (error) {
          case 'internal_server_error':
            return Drupal.t('Communication with Paymill failed.');

          case 'invalid_public_key':
            return Drupal.t('Invalid public key.');

          case 'unknown_error':
            return Drupal.t('Unknown error.');

          case '3ds_cancelled':
            return Drupal.t('User cancelled 3D security password entry.');

          case 'field_invalid_card_number':
            return Drupal.t('Missing or invalid credit card number.');

          case 'field_invalid_card_exp_year':
            return Drupal.t('Missing or invalid expiry year.');

          case 'field_invalid_card_exp_month':
            return Drupal.t('Missing or invalid expiry month.');

          case 'field_invalid_card_exp':
            return Drupal.t('Card has expired.');

          case 'field_invalid_card_cvc':
            return Drupal.t('Missing or invalid checking number.');

          case 'field_invalid_card_holder':
            return Drupal.t('Missing or invalid cardholder name.');

          case 'field_invalid_account_number':
            return Drupal.t('Missing or invalid bank account number.');

          case 'field_invalid_account_holder':
            return Drupal.t('Missing or invalid bank account holder.');

          case 'field_invalid_bank_code':
            return Drupal.t('Missing or invalid zip code.');

          default:
            return Drupal.checkPlain(error.replace('_', ' '));
        }
      }
    }
  };
})(jQuery);
