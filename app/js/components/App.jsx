/* * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
import React from 'react';
import { observer } from 'mobx-react';

export default observer(({ form }) => (
  <form>
    <label htmlFor={form.$('nombreMed').id}>
      {form.$('nombreMed').label}
    </label>
    <input {...form.$('nombreMed').bind()} />
    <p>{form.$('nombreMed').error}</p>

     <label htmlFor={form.$('cantidad').id}>
      {form.$('nombreMed').label}
    </label>
    <input {...form.$('cantidad').bind()} />
    <p>{form.$('cantidad').error}</p>

     <label htmlFor={form.$('prov').id}>
      {form.$('prov').label}
    </label>
    <input {...form.$('prov').bind()} />
    <p>{form.$('prov').error}</p>


     <label htmlFor={form.$('lote').id}>
      {form.$('lote').label}
    </label>
    <input {...form.$('lote').bind()} />
    <p>{form.$('lote').error}</p>


     <label htmlFor={form.$('fechaExp').id}>
      {form.$('fechaExp').label}
    </label>
    <input {...form.$('fechaExp').bind()} />
    <p>{form.$('fechaExp').error}</p>

     <label htmlFor={form.$('costo').id}>
      {form.$('costo').label}
    </label>
    <input {...form.$('costo').bind()} />
    <p>{form.$('costo').error}</p>


    <button type="submit" onClick={form.onSubmit}>Submit</button>
    <button type="button" onClick={form.onReset}>Reset</button>
    <button type="button" onClick={form.onClear}>Clear</button>

    <p>{form.error}</p>
  </form>
));