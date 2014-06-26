helpers = require('../helpers')
AWS = helpers.AWS

describe 'AWS.Model.Shape', ->
  describe 'TimestampShape', ->
    describe 'toType()', ->
      it 'converts unix timestamps', ->
        api = new AWS.Model.Api metadata: timestampFormat: 'unixTimestamp'
        shape = AWS.Model.Shape.create { type: 'timestamp' }, { api: api }
        date = shape.toType('Thu, 01 Jan 1970 00:00:00 GMT')
        expect(date).toEqual(new Date(0))

      it 'converts iso8601 timestamps', ->
        api = new AWS.Model.Api metadata: timestampFormat: 'iso8601'
        shape = AWS.Model.Shape.create { type: 'timestamp' }, { api: api }
        date = shape.toType('1970-01-01T00:00:00.000Z')
        expect(date).toEqual(new Date(0))

      it 'converts rfc822 timestamps', ->
        api = new AWS.Model.Api metadata: timestampFormat: 'rfc822'
        shape = AWS.Model.Shape.create { type: 'timestamp' }, { api: api }
        date = shape.toType(12300)
        expect(date).toEqual(new Date(12300))
