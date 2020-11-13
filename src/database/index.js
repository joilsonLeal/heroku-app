import knexfile from '../../knexfile';
import * as Knex from 'knex';

const knex = Knex(knexfile.development);

module.exports = knex;