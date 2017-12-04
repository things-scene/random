/*
 * Copyright © HatioLab Inc. All rights reserved.
 */

const formats = [
  'bool,character,floating,integer,letter,natural,string',
  'paragraph,sentence,syllable,word',
  'age,birthday,cf,cpf,first,gender,last,name,prefix,ssn,suffix',
  'android_id,apple_token,bb_pin,wp7_anid,wp8_anid2,avatar,color',
  'company,domain,email,fbid,google_analytics,hashtag,ip,ipv6,klout,profession,tld,twitter,url',
  'address,altitude,areacode,city,coordinates,country,depth,geohash,latitude,longitude,phone,postal,province,state,street,zip',
  'ampm,date,hammertime,hour,millisecond,minute,month,second,timestamp,timezone,weekday,year',
  'cc,cc_type,currency,currency_pair,dollar,euro,exp,exp_month,exp_year',
  'coin,d4,d6,d8,d10,d12,d20,d30,d100,guid,hash'
].join(',').split(',')

const NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties: [{
    type: 'select',
    label: 'format',
    name: 'format',
    property: {
      options: formats.map(format => ({ display: format, value: format }))
    }
  }, {
    type: 'number',
    label: 'count',
    name: 'count'
  }, {
    type: 'number',
    label: 'period',
    name: 'period'
  }]
}

const RANDOM_IMAGE = 'data:image/png;base64,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'

var { DataSource, RectPath, Shape } = scene

export default class Random extends DataSource(RectPath(Shape)) {

  static load(component) {
    if (Random.loaded) {
      component.onload()
      return
    }

    if (this.script) {
      Random.readies.push(component)
      return
    }

    this.readies = [component]

    var script = document.createElement('script');
    script.onload = function () {
      Random.loaded = true
      Random.readies.forEach(component => component.onload())
      delete Random.readies
    }

    script.src = 'http://chancejs.com/chance.min.js';

    document.head.appendChild(script)
    Random.script = script
  }

  static get image() {
    if (!Random._image) {
      Random._image = new Image()
      Random._image.src = RANDOM_IMAGE
    }

    return Random._image
  }

  onload() {
    this._initRandom()
  }

  added() {
    if (!this.app.isViewMode)
      return;

    Random.load(this);
  }

  dispose() {
    super.dispose();
    this._stopRepeater();
  }

  random() {
    var {
      format,
      count
    } = this.state

    if (!Random.loaded || !format || !count)
      return

    this.data = chance.n(chance[format], count)

    console.log('data', this.data)
  }

  _initRandom() {
    this._stopRepeater();
    this._startRepeater();
  }

  _startRepeater() {
    if (this.getState('period')) {
      this.repeatTimer = setInterval(function () {
        this.random();
      }.bind(this), this.getState('period'));
    }

    this.random();
  }

  _stopRepeater() {
    if (this.repeatTimer)
      clearTimeout(this.repeatTimer)
  }

  _draw(context) {
    var {
      left,
      top,
      width,
      height
    } = this.bounds;

    context.beginPath();
    context.drawImage(Random.image, left, top, width, height);
  }

  ondblclick(e) {
    this.random()
  }

  get hasTextProperty() {
    return false
  }

  get controls() { }

  get nature() {
    return NATURE;
  }
}

scene.Component.register('random', Random);
