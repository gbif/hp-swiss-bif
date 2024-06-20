var primaryColor = themeStyle && themeStyle.colors && themeStyle.colors.primary;
var isSquared = themeStyle && themeStyle.square;

const countryCode = 'CH';

if (primaryColor) {
  var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
    primary: primaryColor,
    // mapDensityColors: ['#edf8e9', '#bae4b3', '#bae4b3', '#31a354', '#006d2c'],  // green2
    mapDensityColors: ['#31a354', '#006d2c', '#006d2c', '#006d2c', '#006d2c'],  // all dark green
    // mapDensityColors: ['#216d40', '#216d40', '#0e4725', '#0e4725', '#00260f'],  // darker green2
    // mapDensityColors: ['#71934c', '#608942', '#4d7b36', '#3e702b', '#2e621f'],  // darker green
    borderRadius: isSquared? 0 : 3
  }});
}

var siteConfig = {
  apiKeys: {
   "mapbox": "pk.eyJ1IjoiaW5mb2ZhdW5hIiwiYSI6ImNsdzljY3JpODAxaXEycXBleGJsNTBqcHcifQ.DgU-N8lHtOSS0ogNiBnmow",
 },  
  version: 2,
  availableCatalogues: ['OCCURRENCE', 'LITERATURE', 'DATASET'],
  routes: {
    enabledRoutes: ['occurrenceSearch', 'publisherKey', 'datasetKey', 'datasetSearch', 'literatureSearch'],
  },
  occurrence: {
    mapSettings: {
      enabled: true,
      lat: 46.801111,
      lng: 8.626667,
      zoom: 7.877
    },
    rootPredicate: {
      "type": "and",
      "predicates": [
        {
          "type": "equals",
          "key": "country",
          "value": countryCode
        },
        {
          "type": "equals",
          "key": "networkKey",
          "value": "0b00b924-016b-4954-96a7-2d9264b5d0ba"
        },
        {
        "type": "not",
        "predicate": {
            "type": "equals",
            "key": "basisOfRecord",
            "value": "PRESERVED_SPECIMEN"
          }
        }
      ]
    },
    highlightedFilters: ['taxonKey', 'gadmGid', 'stateProvince', 'publisherKey', 'elevation', 'year', 'basisOfRecord', 'datasetName', 'occurrenceIssue'],
    occurrenceSearchTabs: ['MAP', 'TABLE', 'GALLERY', 'DATASETS', 'DASHBOARD'], // what tabs should be shown
    availableTableColumns: ['scientificName', 'features', 'country', 'coordinates', 'eventDate', 'basisOfRecord', 'publisher', 'catalogNumber', 
                            'recordedBy', 'identifiedBy', 'recordNumber', 'typeStatus', 'preparations', 'collectionCode', 'institutionCode', 'institutionKey', 
                            'collectionKey', 'locality', 'higherGeography', 'stateProvince', 'year', 'establishmentMeans', 'iucnRedListCategory', 'dataset', 'datasetName'], // all the columns that are available to the user. This array defines the order they appear in.
    defaultTableColumns: ['scientificName', 'higherGeography', 'country', 'year', 'establishmentMeans', 'iucnRedListCategory', 'catalogNumber', 'institutionKey', 'dataset', 'datasetName'] // the columns showed by default. The order is not relevant, as it is defined in the list of available columns. The user can change what columns to show in the UI.

  },
  dataset: {
    rootFilter: {publishingCountry: countryCode},
    highlightedFilters: ['q', 'anyPublisherKey', 'datasetType', 'license'],
    excludedFilters: ['publishingCountryCode'],
  },
  publisher: {
    rootFilter: {country: countryCode},
    excludedFilters: ['countrySingle', 'networkKey'],
  },
  literature: {
    rootFilter: {
      predicate: {
        type: 'or', predicates: [
          {
            type: 'in',
            key: 'countriesOfResearcher',
            values: [countryCode]
          },
          {
            type: 'in',
            key: 'countriesOfCoverage',
            values: [countryCode]
          }
        ]
      }
    },
    highlightedFilters: ['q', 'countriesOfResearcher', 'countriesOfCoverage', 'year']
  },
  maps: {
    locale: 'de',
    defaultProjection: 'MERCATOR', // what is the default projection
    defaultMapStyle: 'BRIGHT', // what is the default style
    mapStyles: {
      MERCATOR: ['BRIGHT', 'NATURAL', 'SATELLITE', 'DARK'],
    },
    addMapStyles: function ({ mapStyleServer, language, pixelRatio, apiKeys, mapComponents }) {
      return {
        SWISSTOPO: { // the name of your style
          component: mapComponents.MapboxMap,
          labelKey: 'Swisstopo', // the label in the select. Use a translation key
          mapConfig: {
            basemapStyle: `https://vectortiles.geo.admin.ch/styles/ch.swisstopo.lightbasemap.vt/style.json`,
            projection: 'EPSG_3857'// one of 4326 | 3031 | 3857 | 3575
          }
        }
      }
    },
    // rewire style names to show a different style
    styleLookup: {
      MERCATOR: {
        BRIGHT: 'SWISSTOPO' 
      }
    }        
  }
};

// example of a language specific route overwrite, in this example for showing the maps labels in the language of the site
if (pageLang === 'fr')  {
  siteConfig.maps.locale = 'fr';
}
if (pageLang === 'en')  {
  siteConfig.maps.locale = 'en';
}
