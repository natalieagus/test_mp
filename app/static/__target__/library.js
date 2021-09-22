// Transcrypt'ed from Python, 2021-09-21 22:15:09
var random = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_random__ from './random.js';
__nest__ (random, '', __module_random__);
var __name__ = '__main__';
export var array = [];
export var gen_random_int = function (number, seed) {
	var a = [];
	for (var i = 0; i < number; i++) {
		a.append (i);
	}
	random.shuffle (a, random.seed (seed));
	return a;
};
export var generate = function () {
	var number = 10;
	var seed = 200;
	array = gen_random_int (number, seed);
	// pass;
	var array_string = str (array);
	var array_str = array_string.__getslice__ (1, -(1), 1) + '.';
	// pass;
	document.getElementById ('generate').innerHTML = array_str;
};
export var bubble_sort = function (list) {
	var n = len (list);
	var swapped = true;
	var n_new = 0;
	while (swapped == true) {
		var swapped = false;
		for (var j = 1; j < n; j++) {
			if (list [j] < list [j - 1]) {
				var __left0__ = tuple ([list [j - 1], list [j]]);
				list [j] = __left0__ [0];
				list [j - 1] = __left0__ [1];
				var swapped = true;
				var n_new = j;
			}
		}
		var n = n_new;
	}
};
export var sortnumber1 = function () {
	var new_array = array.__getslice__ (0, null, 1);
	bubble_sort (new_array);
	var array_string1 = str (new_array);
	var array_str = array_string1.__getslice__ (1, -(1), 1) + '.';
	// pass;
	document.getElementById ('sorted').innerHTML = array_str;
};
export var sortnumber2 = function () {
	var value = document.getElementsByName ('numbers') [0].value;
	if (value == '') {
		window.alert ('Your textbox is empty');
		return ;
	}
	var list_of_values = value.py_split (', ');
	var new_list = (function () {
		var __accu0__ = [];
		for (var i of list_of_values) {
			__accu0__.append (int (i));
		}
		return __accu0__;
	}) ();
	bubble_sort (new_list);
	var array_string2 = str (new_list);
	var array_str = array_string2.__getslice__ (1, -(1), 1) + '.';
	// pass;
	document.getElementById ('sorted').innerHTML = array_str;
};

//# sourceMappingURL=library.map