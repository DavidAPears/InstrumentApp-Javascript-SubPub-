const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container){
  this.container = container;
};

InstrumentInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Instrument:selected-instrument-ready', (evt) => {
    const instrument = evt.detail;
    this.render(instrument);
    console.log(instrument);
  });
};

InstrumentInfoView.prototype.render = function(instrument){
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `The ${instrument.name} can be described as: '${instrument.description}'. It contains such instruments as: ${instrument.instruments}.`;
  this.container.innerHTML = '';
  // This line above ensures that the div is always set to nothing, so that the lsit returned is only ever the selected animal
  this.container.appendChild(infoParagraph);
};


module.exports = InstrumentInfoView;
