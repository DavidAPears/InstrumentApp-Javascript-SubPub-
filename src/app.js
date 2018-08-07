const Instrument = require('./models/instrument.js');
const SelectView = require('./views/select_view.js');
const InstrumentInfoView = require('./views/instrument_info_view.js');


document.addEventListener('DOMContentLoaded', function(){
  const selectElement = document.querySelector('select#instrument-dropdown');
  const instrumentDropdown = new SelectView(selectElement);
  instrumentDropdown.bindEvents();

  const infoDiv = document.querySelector('div#instrument-info')
  const instrumentInfoDisplay = new InstrumentInfoView(infoDiv);
    instrumentInfoDisplay.bindEvents();

    const instrumentDataSource = new Instrument();
      instrumentDataSource.bindEvents();


});
