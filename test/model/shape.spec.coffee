helpers = require('../helpers')
AWS = helpers.AWS

describe 'AWS.Model.Shape', ->
  describe 'TimestampShape', ->
    describe 'toType()', ->
      it 'converts unix timestamps', ->
        api = new AWS.Model.Api metadata: timestampFormat: 'unixTimestamp'
        shape = AWS.Model.Shape.create { type: 'timestamp' }, { api: api }
        date = shape.toType(12300)
        expect(date).to.eql(new Date(12300000))

      it 'converts iso8601 timestamps', ->
        api = new AWS.Model.Api metadata: timestampFormat: 'iso8601'
        shape = AWS.Model.Shape.create { type: 'timestamp' }, { api: api }
        date = shape.toType('1970-01-01T00:00:00.000Z')
        expect(date).to.eql(new Date(0))

      it 'converts rfc822 timestamps', ->
        api = new AWS.Model.Api metadata: timestampFormat: 'rfc822'
        shape = AWS.Model.Shape.create { type: 'timestamp' }, { api: api }
        date = shape.toType('Thu, 01 Jan 1970 00:00:00 GMT')
        expect(date).to.eql(new Date(0))

    describe 'BooleanShape', ->
      describe 'toType()', ->
        shape = AWS.Model.Shape.create { type: 'boolean' }

        it 'converts true / false booleans', ->
          expect(shape.toType(true)).to.eql(true)
          expect(shape.toType(false)).to.eql(false)

        it 'converts string "true" and "false" to boolean', ->
          expect(shape.toType('true')).to.eql(true)
          expect(shape.toType('false')).to.eql(false)

        it 'converts other strings to false', ->
          expect(shape.toType('nottrue')).to.eql(false)

        it 'converts null/undefined to null', ->
          expect(shape.toType(null)).to.eql(null)
          expect(shape.toType(undefined)).to.eql(null)
