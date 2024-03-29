const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  })
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  })

};

Traveller.prototype.getJourneysByMinDistance = function (distance) {
  const result = []
    return this.journeys.every((journey) => {
    if (journey.distance >= distance){
      result.push(distance);
    };
  });
  return getJourneysByMinDistance(jounrneys);
};


Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.journeys.map((journey) => {
    return journey.transport;
  })
};


module.exports = Traveller;
