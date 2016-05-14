var selectize;
var selected_state;

$(function () {
  var doneLoading = false;

  function setupDistrictDropdown(stateCode) {
    doneLoading = false;

    var inputElement = $('#school-district input');
    if (inputElement[0].selectize) {
      inputElement[0].selectize.clear();
      inputElement[0].selectize.destroy();
    }

    selectize = inputElement.selectize({
      maxItems: 1
    });

    inputElement[0].selectize.load(function (callback) {
      $.ajax({
        url: "/dashboardapi/v1/school-districts/" + stateCode,
        type: 'GET',
        error: function () {
          callback();
        },
        success: function (res) {
          var districts = [];

          for (var i = 0; i < res.object.length; i++) {
            var entry = res.object[i];
            districts.push({value: entry.id, text: entry.name});
          }
          callback(districts);
        }
      });
    });
  }

  $('#school-type').change(function () {
    if (['public', 'other'].indexOf($(this).val()) > -1) {
      // Show state.
      $('#school-state').closest('.form-group').show();
      $('#school-zipcode').closest('.form-group').hide();
      // And clear ZIP.

    } else {
      // Show ZIP.
      $('#school-state').closest('.form-group').hide();
      $('#school-zipcode').closest('.form-group').show();
      $('#school-district').closest('.form-group').hide();
      // And clear district.
    }
  });

  $('#school-state').change(function () {
    if ($(this).val() != 'other') {
      // Show districts.
      $('#school-district').closest('.form-group').show();
      setupDistrictDropdown($('#school-state').val());
    } else {
      $('#school-district').closest('.form-group').hide();
      // And clear district.
    }
  });
});
