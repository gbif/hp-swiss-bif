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
  "version": 3,
  "pages": [
    { "id": "occurrenceSearch" },
    { "id": "publisherSearch" },
    { "id": "publisherKey" },
    { "id": "datasetKey" },
    { "id": "datasetSearch" },
    { "id": "literatureSearch" }
  ],
  "availableCatalogues": ["OCCURRENCE", "DATASET", "PUBLISHER", "LITERATURE"],
  "theme": {
    "primary": primaryColor,
    "borderRadius": isSquared,
    // Palette verte 5 classes (ColorBrewer "Greens"), mêmes paliers de contraste
    // que la palette bleue du fichier v3 (claire -> foncée)
    "mapDensityColors": ["#edf8e9", "#bae4b3", "#74c476", "#31a354", "#006d2c"]
  },
  "apiKeys": {
    "mapbox": "pk.eyJ1IjoiaW5mb2ZhdW5hIiwiYSI6ImNsdzljY3JpODAxaXEycXBleGJsNTBqcHcifQ.DgU-N8lHtOSS0ogNiBnmow"
  },
  "maps": {
    "locale": "fr",
    "mapStyles": {
      "defaultProjection": "MERCATOR",
      "defaultMapStyle": "BRIGHT",
      "options": {
        "MERCATOR": ["BRIGHT", "NATURAL", "SATELLITE", "DARK"]
      }
    },
    // Rewire du style pour afficher Swisstopo à la place de BRIGHT
    "styleLookup": {
      "MERCATOR": {
        "BRIGHT": "SWISSTOPO"
      }
    },
    addMapStyles: function ({ mapStyleServer, language, pixelRatio, apiKeys, mapComponents }) {
      return {
        SWISSTOPO: {
          component: mapComponents.MapboxMap,
          labelKey: 'Swisstopo',
          mapConfig: {
            basemapStyle: `https://vectortiles.geo.admin.ch/styles/ch.swisstopo.lightbasemap.vt/style.json`,
            projection: 'EPSG_3857'
          }
        }
      }
    }
  },
  "languages": [
    {
      code: 'fr',
      localeCode: 'fr',
      label: 'Français',
      default: true,
      textDirection: 'ltr',
      iso3LetterCode: 'fra',
      gbifOrgLocalePrefix: '/fr',
      mapTileLocale: 'fr'
    },
    {
      code: 'de',
      localeCode: 'de',
      label: 'Deutsch',
      default: false,
      textDirection: 'ltr',
      iso3LetterCode: 'deu',
      gbifOrgLocalePrefix: '',
      mapTileLocale: 'de'
    },
    {
      code: 'it',
      localeCode: 'it',
      label: 'Italiano',
      default: false,
      textDirection: 'ltr',
      iso3LetterCode: 'ita',
      gbifOrgLocalePrefix: '',
      mapTileLocale: 'it'
    },
    {
      code: 'en',
      localeCode: 'en',
      label: 'English',
      default: false,
      textDirection: 'ltr',
      iso3LetterCode: 'eng',
      gbifOrgLocalePrefix: '',
      mapTileLocale: 'en'
    }
  ],
  "occurrenceSearch": {
    "scope": {
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
        }
      ]
    },
    "highlightedFilters": ["taxonKey", "gadmGid", "stateProvince", "publisherKey", "elevation", "year", "basisOfRecord", "datasetName", "occurrenceIssue"],
    "tabs": ["map", "table", "gallery", "datasets", "dashboard"],
    "availableTableColumns": ["scientificName", "features", "country", "coordinates", "eventDate", "basisOfRecord", "publisher", "catalogNumber",
                            "recordedBy", "identifiedBy", "recordNumber", "typeStatus", "preparations", "collectionCode", "institutionCode", "institutionKey",
                            "collectionKey", "locality", "higherGeography", "stateProvince", "year", "establishmentMeans", "iucnRedListCategory", "dataset", "datasetName"],
    "defaultEnabledTableColumns": ["scientificName", "higherGeography", "country", "year", "establishmentMeans", "iucnRedListCategory", "catalogNumber", "institutionKey", "dataset", "datasetName"],
    "mapSettings": {
      "enabled": true,
      "lat": 46.801111,
      "lng": 8.626667,
      "zoom": 7.877
    }
  },
  "datasetSearch": {
    "scope": { "networkKey": countryCode },
    "highlightedFilters": ["q", "anyPublisherKey", "datasetType", "license"],
    "excludedFilters": ["publishingCountryCode"]
  },
  "publisherSearch": {
    "scope": { "country": countryCode },
    "excludedFilters": ["countrySingle", "networkKey"]
  },
  "literatureSearch": {
    "scope": {
      "predicate": {
        "type": "or",
        "predicates": [
          { "type": "in", "key": "countriesOfResearcher", "values": [countryCode] },
          { "type": "in", "key": "countriesOfCoverage", "values": [countryCode] }
        ]
      }
    },
    "highlightedFilters": ["q", "countriesOfResearcher", "countriesOfCoverage", "year"]
  }
};

// Surcharge de la langue des cartes selon la langue de la page
if (pageLang === 'fr')  { siteConfig.maps.locale = 'fr'; }
if (pageLang === 'en')  { siteConfig.maps.locale = 'en'; }
if (pageLang === 'de')  { siteConfig.maps.locale = 'de'; }
if (pageLang === 'it')  { siteConfig.maps.locale = 'it'; }
