
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
      // 
      
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
