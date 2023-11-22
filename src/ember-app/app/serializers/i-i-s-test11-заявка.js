import { Serializer as ЗаявкаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test11-заявка';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗаявкаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
