
/**
 * @file
 * JS for generating authentication tokens for Paymill.
 *
 * Created by: Topsitemakers
 * http://www.topsitemakers.com/
 */

(function($) {
  Drupal.behaviors.ucPaymill = {
    attach: function(context, settings) {
      window.PAYMILL_PUBLIC_KEY = Drupal.settings.ucPaymill.publicKey;

      var submitForm = $('#uc-cart-checkout-form'),
          submitButton = submitForm.find('#edit-continue'),
          submitFormErrors = submitForm.find('#uc-paymill-errors');

      submitForm.once('uc_paymill-processed').submit(function(e) {
        // Build app Paymill parameters for this transaction.
        var ucPaymillParams = {
          number: submitForm.find('#edit-panes-payment-details-cc-number').val(),
          exp_month: submitForm.find('#edit-panes-payment-details-cc-exp-month').val(),
          exp_year: submitForm.find('#edit-panes-payment-details-cc-exp-year').val(),
          cvc: submitForm.find('#edit-panes-payment-details-cc-cvv').val(),
          amount: submitForm.find('#uc-paymill-order-total').val(),
          currency: Drupal.settings.ucPaymill.currencyCode
        };
        // Get the Paymill token
        paymill.createToken(ucPaymillParams, function(error, result) {
          if (error) {
            $('#uc-paymill-errors').val(error.apierror);
          }
          else {
            $('#uc-paymill-token').val(result.token);
          }
          submitButton.click();
        });
        if ($('#uc-paymill-token').val() != '' || $('#uc-paymill-errors').val() != '') {
          return true;
        }
        return false;
      });
    }
  };
})(jQuery);
