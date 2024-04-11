var primaryColor = themeStyle && themeStyle.colors && themeStyle.colors.primary;
var isSquared = themeStyle && themeStyle.square;

const countryCode = 'CH';

if (primaryColor) {
  var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
    primary: primaryColor,
    borderRadius: isSquared? 0 : 3
  }});
}

var siteConfig = {
  version: 2,
  availableCatalogues: ['OCCURRENCE', 'LITERATURE', 'DATASET'],
  routes: {
    enabledRoutes: ['occurrenceSearch', 'publisherKey', 'datasetKey', 'datasetSearch', 'literatureSearch'],
  },
  occurrence: {
    mapSettings: {
      lat: 0,
      lng: 0,
      zoom: 1.8
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
    defaultTableColumns: ['scientificName', 'higherGeography', 'country', 'year', 'establishmentMeans', 'iucnRedListCategory', 'catalogueNumber', 'institutionKey', 'dataset', 'datasetName'] // the columns showed by default. The order is not relevant, as it is defined in the list of available columns. The user can change what columns to show in the UI.

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
    locale: 'de'
  }
};

// example of a language specific route overwrite, in this example for showing the maps labels in the language of the site
if (pageLang === 'fr')  {
  siteConfig.maps.locale = 'fr';
}
if (pageLang === 'en')  {
  siteConfig.maps.locale = 'en';
}
