(function() {var implementors = {};
implementors["pyo3"] = [{"text":"impl&lt;'a&gt; !RefUnwindSafe for PyDowncastError&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyErr","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for GILGuard","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for GILPool","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for Py&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'p&gt; !RefUnwindSafe for Python&lt;'p&gt;","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyAny","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for PyBuffer&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !RefUnwindSafe for ReadOnlyCell&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ElementType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CompareOp","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyTraverseError","synthetic":true,"types":[]},{"text":"impl&lt;'p&gt; !RefUnwindSafe for PyVisit&lt;'p&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, U&gt; RefUnwindSafe for IterNextOutput&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, U&gt; RefUnwindSafe for IterANextOutput&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyBaseException","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyException","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyStopAsyncIteration","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyStopIteration","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyGeneratorExit","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyArithmeticError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyLookupError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyAssertionError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyAttributeError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyBufferError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyEOFError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyFloatingPointError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyOSError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyImportError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyModuleNotFoundError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyIndexError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyKeyError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyKeyboardInterrupt","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyMemoryError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyNameError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyOverflowError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyRuntimeError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyRecursionError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyNotImplementedError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PySyntaxError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyReferenceError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PySystemError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PySystemExit","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyTypeError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyUnboundLocalError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyUnicodeError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyUnicodeDecodeError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyUnicodeEncodeError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyUnicodeTranslateError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyValueError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyZeroDivisionError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyBlockingIOError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyBrokenPipeError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyChildProcessError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyConnectionError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyConnectionAbortedError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyConnectionRefusedError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyConnectionResetError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyFileExistsError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyFileNotFoundError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyInterruptedError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyIsADirectoryError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyNotADirectoryError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyPermissionError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyProcessLookupError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyTimeoutError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyEnvironmentError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyIOError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for CancelledError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for InvalidStateError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for TimeoutError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for IncompleteReadError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for LimitOverrunError","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for QueueEmpty","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for QueueFull","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for herror","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for gaierror","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for timeout","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyCodeObject","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyFutureFeatures","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Py_complex","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyComplexObject","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyDateTime_CAPI","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyDateTime_Date","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyDateTime_Time","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyDateTime_DateTime","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyDateTime_Delta","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyDateTimeAPI","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyGetSetDef","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyDictKeysObject","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyDictObject","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyFloatObject","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyGenObject","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyListObject","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyLongObject","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyMethodDef","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyModuleDef_Base","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyModuleDef_Slot","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyModuleDef","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyObject","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyVarObject","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Py_buffer","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyNumberMethods","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PySequenceMethods","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyMappingMethods","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyAsyncMethods","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyBufferProcs","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyTypeObject","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyHeapTypeObject","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyType_Slot","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyType_Spec","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyObjectArenaAllocator","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyArena","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyBaseExceptionObject","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PySyntaxErrorObject","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyImportErrorObject","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyUnicodeErrorObject","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PySystemExitObject","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyOSErrorObject","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyStopIterationObject","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyHash_FuncDef","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyMemAllocatorEx","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyInterpreterState","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyThreadState","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyCompilerFlags","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for _mod","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for symtable","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for _node","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for setentry","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PySetObject","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PySliceObject","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyStructSequence_Field","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyStructSequence_Desc","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyTupleObject","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyWeakReference","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyMemAllocatorDomain","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyGILState_STATE","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyMemberDef","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyTryBlock","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyFrameObject","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for FreeList&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for Slot&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !RefUnwindSafe for GILOnceCell&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PanicException","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyModule","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !RefUnwindSafe for PyCell&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'p, T&gt; !RefUnwindSafe for PyRef&lt;'p, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'p, T&gt; !RefUnwindSafe for PyRefMut&lt;'p, T&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyBorrowError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyBorrowMutError","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for PyNativeTypeInitializer&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for PyClassInitializer&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as PyTypeInfo&gt;::BaseType as PyTypeInfo&gt;::Initializer: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyClassDummySlot","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyClassDictSlot","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PyClassWeakRefSlot","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyBool","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyByteArray","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyBytes","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyComplex","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyDate","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyDateTime","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyDelta","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyTime","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyTzInfo","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyDict","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyFloat","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyCFunction","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyFunction","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyIterator","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyList","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyLong","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PySequence","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyFrozenSet","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PySet","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PySlice","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PySliceIndices","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyString","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyTuple","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for PyType","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()