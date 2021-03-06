/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import test from '@romejs/test';
import {testLintMultiple} from '../../api/lint.test';

test('no shadow restricted names', async (t) => {
  await testLintMultiple(t, [
    'function NaN() {}',
    'let Set;',
    '!function Array() {}',
    'function test(JSON) {}',
    'try {  } catch(Object) {}',
  ], {category: 'lint/noShadowRestrictedNames'});
});
