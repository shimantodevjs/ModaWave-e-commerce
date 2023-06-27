'use strict';

/**
 * item servicee
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::item.item');
