import Widget from '../Widget';

export default Widget.extend({
  _name: 'Button',
  _type: 'tabris.Button',
  _events: {
    select: {
      trigger(event) {
        this.trigger('select', this, event);
      }
    }
  },
  _properties: {
    alignment: {type: ['choice', ['left', 'right', 'center']], default: 'center'},
    image: {type: 'image', default: null},
    text: {type: 'string', default: ''}
  }
});
