(function() {var implementors = {};
implementors["pyo3"] = [{"text":"impl&lt;'a&gt; Unpin for PyDowncastError&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for PyErr","synthetic":true,"types":[]},{"text":"impl Unpin for GILGuard","synthetic":true,"types":[]},{"text":"impl Unpin for GILPool","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Py&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'p&gt; Unpin for Python&lt;'p&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'p&gt; Unpin for PythonVersionInfo&lt;'p&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for PyAny","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for PyBuffer&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for ReadOnlyCell&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for ElementType","synthetic":true,"types":[]},{"text":"impl Unpin for CompareOp","synthetic":true,"types":[]},{"text":"impl Unpin for PyTraverseError","synthetic":true,"types":[]},{"text":"impl&lt;'p&gt; Unpin for PyVisit&lt;'p&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, U&gt; Unpin for IterNextOutput&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, U&gt; Unpin for IterANextOutput&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for PyBaseException","synthetic":true,"types":[]},{"text":"impl Unpin for PyException","synthetic":true,"types":[]},{"text":"impl Unpin for PyStopAsyncIteration","synthetic":true,"types":[]},{"text":"impl Unpin for PyStopIteration","synthetic":true,"types":[]},{"text":"impl Unpin for PyGeneratorExit","synthetic":true,"types":[]},{"text":"impl Unpin for PyArithmeticError","synthetic":true,"types":[]},{"text":"impl Unpin for PyLookupError","synthetic":true,"types":[]},{"text":"impl Unpin for PyAssertionError","synthetic":true,"types":[]},{"text":"impl Unpin for PyAttributeError","synthetic":true,"types":[]},{"text":"impl Unpin for PyBufferError","synthetic":true,"types":[]},{"text":"impl Unpin for PyEOFError","synthetic":true,"types":[]},{"text":"impl Unpin for PyFloatingPointError","synthetic":true,"types":[]},{"text":"impl Unpin for PyOSError","synthetic":true,"types":[]},{"text":"impl Unpin for PyImportError","synthetic":true,"types":[]},{"text":"impl Unpin for PyModuleNotFoundError","synthetic":true,"types":[]},{"text":"impl Unpin for PyIndexError","synthetic":true,"types":[]},{"text":"impl Unpin for PyKeyError","synthetic":true,"types":[]},{"text":"impl Unpin for PyKeyboardInterrupt","synthetic":true,"types":[]},{"text":"impl Unpin for PyMemoryError","synthetic":true,"types":[]},{"text":"impl Unpin for PyNameError","synthetic":true,"types":[]},{"text":"impl Unpin for PyOverflowError","synthetic":true,"types":[]},{"text":"impl Unpin for PyRuntimeError","synthetic":true,"types":[]},{"text":"impl Unpin for PyRecursionError","synthetic":true,"types":[]},{"text":"impl Unpin for PyNotImplementedError","synthetic":true,"types":[]},{"text":"impl Unpin for PySyntaxError","synthetic":true,"types":[]},{"text":"impl Unpin for PyReferenceError","synthetic":true,"types":[]},{"text":"impl Unpin for PySystemError","synthetic":true,"types":[]},{"text":"impl Unpin for PySystemExit","synthetic":true,"types":[]},{"text":"impl Unpin for PyTypeError","synthetic":true,"types":[]},{"text":"impl Unpin for PyUnboundLocalError","synthetic":true,"types":[]},{"text":"impl Unpin for PyUnicodeError","synthetic":true,"types":[]},{"text":"impl Unpin for PyUnicodeDecodeError","synthetic":true,"types":[]},{"text":"impl Unpin for PyUnicodeEncodeError","synthetic":true,"types":[]},{"text":"impl Unpin for PyUnicodeTranslateError","synthetic":true,"types":[]},{"text":"impl Unpin for PyValueError","synthetic":true,"types":[]},{"text":"impl Unpin for PyZeroDivisionError","synthetic":true,"types":[]},{"text":"impl Unpin for PyBlockingIOError","synthetic":true,"types":[]},{"text":"impl Unpin for PyBrokenPipeError","synthetic":true,"types":[]},{"text":"impl Unpin for PyChildProcessError","synthetic":true,"types":[]},{"text":"impl Unpin for PyConnectionError","synthetic":true,"types":[]},{"text":"impl Unpin for PyConnectionAbortedError","synthetic":true,"types":[]},{"text":"impl Unpin for PyConnectionRefusedError","synthetic":true,"types":[]},{"text":"impl Unpin for PyConnectionResetError","synthetic":true,"types":[]},{"text":"impl Unpin for PyFileExistsError","synthetic":true,"types":[]},{"text":"impl Unpin for PyFileNotFoundError","synthetic":true,"types":[]},{"text":"impl Unpin for PyInterruptedError","synthetic":true,"types":[]},{"text":"impl Unpin for PyIsADirectoryError","synthetic":true,"types":[]},{"text":"impl Unpin for PyNotADirectoryError","synthetic":true,"types":[]},{"text":"impl Unpin for PyPermissionError","synthetic":true,"types":[]},{"text":"impl Unpin for PyProcessLookupError","synthetic":true,"types":[]},{"text":"impl Unpin for PyTimeoutError","synthetic":true,"types":[]},{"text":"impl Unpin for PyEnvironmentError","synthetic":true,"types":[]},{"text":"impl Unpin for PyIOError","synthetic":true,"types":[]},{"text":"impl Unpin for CancelledError","synthetic":true,"types":[]},{"text":"impl Unpin for InvalidStateError","synthetic":true,"types":[]},{"text":"impl Unpin for TimeoutError","synthetic":true,"types":[]},{"text":"impl Unpin for IncompleteReadError","synthetic":true,"types":[]},{"text":"impl Unpin for LimitOverrunError","synthetic":true,"types":[]},{"text":"impl Unpin for QueueEmpty","synthetic":true,"types":[]},{"text":"impl Unpin for QueueFull","synthetic":true,"types":[]},{"text":"impl Unpin for herror","synthetic":true,"types":[]},{"text":"impl Unpin for gaierror","synthetic":true,"types":[]},{"text":"impl Unpin for timeout","synthetic":true,"types":[]},{"text":"impl Unpin for PyCodeObject","synthetic":true,"types":[]},{"text":"impl Unpin for PyFutureFeatures","synthetic":true,"types":[]},{"text":"impl Unpin for Py_complex","synthetic":true,"types":[]},{"text":"impl Unpin for PyComplexObject","synthetic":true,"types":[]},{"text":"impl Unpin for PyDateTime_CAPI","synthetic":true,"types":[]},{"text":"impl Unpin for PyDateTime_Date","synthetic":true,"types":[]},{"text":"impl Unpin for PyDateTime_Time","synthetic":true,"types":[]},{"text":"impl Unpin for PyDateTime_DateTime","synthetic":true,"types":[]},{"text":"impl Unpin for PyDateTime_Delta","synthetic":true,"types":[]},{"text":"impl Unpin for PyDateTimeAPI","synthetic":true,"types":[]},{"text":"impl Unpin for PyGetSetDef","synthetic":true,"types":[]},{"text":"impl Unpin for PyDictKeysObject","synthetic":true,"types":[]},{"text":"impl Unpin for PyDictObject","synthetic":true,"types":[]},{"text":"impl Unpin for PyFloatObject","synthetic":true,"types":[]},{"text":"impl Unpin for PyGenObject","synthetic":true,"types":[]},{"text":"impl Unpin for PyListObject","synthetic":true,"types":[]},{"text":"impl Unpin for PyLongObject","synthetic":true,"types":[]},{"text":"impl Unpin for PyMethodDef","synthetic":true,"types":[]},{"text":"impl Unpin for PyModuleDef_Base","synthetic":true,"types":[]},{"text":"impl Unpin for PyModuleDef_Slot","synthetic":true,"types":[]},{"text":"impl Unpin for PyModuleDef","synthetic":true,"types":[]},{"text":"impl Unpin for PyObject","synthetic":true,"types":[]},{"text":"impl Unpin for PyVarObject","synthetic":true,"types":[]},{"text":"impl Unpin for Py_buffer","synthetic":true,"types":[]},{"text":"impl Unpin for PyNumberMethods","synthetic":true,"types":[]},{"text":"impl Unpin for PySequenceMethods","synthetic":true,"types":[]},{"text":"impl Unpin for PyMappingMethods","synthetic":true,"types":[]},{"text":"impl Unpin for PyAsyncMethods","synthetic":true,"types":[]},{"text":"impl Unpin for PyBufferProcs","synthetic":true,"types":[]},{"text":"impl Unpin for PyTypeObject","synthetic":true,"types":[]},{"text":"impl Unpin for PyHeapTypeObject","synthetic":true,"types":[]},{"text":"impl Unpin for PyType_Slot","synthetic":true,"types":[]},{"text":"impl Unpin for PyType_Spec","synthetic":true,"types":[]},{"text":"impl Unpin for PyObjectArenaAllocator","synthetic":true,"types":[]},{"text":"impl Unpin for PyArena","synthetic":true,"types":[]},{"text":"impl Unpin for PyBaseExceptionObject","synthetic":true,"types":[]},{"text":"impl Unpin for PySyntaxErrorObject","synthetic":true,"types":[]},{"text":"impl Unpin for PyImportErrorObject","synthetic":true,"types":[]},{"text":"impl Unpin for PyUnicodeErrorObject","synthetic":true,"types":[]},{"text":"impl Unpin for PySystemExitObject","synthetic":true,"types":[]},{"text":"impl Unpin for PyOSErrorObject","synthetic":true,"types":[]},{"text":"impl Unpin for PyStopIterationObject","synthetic":true,"types":[]},{"text":"impl Unpin for PyHash_FuncDef","synthetic":true,"types":[]},{"text":"impl Unpin for PyMemAllocatorEx","synthetic":true,"types":[]},{"text":"impl Unpin for PyInterpreterState","synthetic":true,"types":[]},{"text":"impl Unpin for PyThreadState","synthetic":true,"types":[]},{"text":"impl Unpin for PyCompilerFlags","synthetic":true,"types":[]},{"text":"impl Unpin for _mod","synthetic":true,"types":[]},{"text":"impl Unpin for symtable","synthetic":true,"types":[]},{"text":"impl Unpin for _node","synthetic":true,"types":[]},{"text":"impl Unpin for setentry","synthetic":true,"types":[]},{"text":"impl Unpin for PySetObject","synthetic":true,"types":[]},{"text":"impl Unpin for PySliceObject","synthetic":true,"types":[]},{"text":"impl Unpin for PyStructSequence_Field","synthetic":true,"types":[]},{"text":"impl Unpin for PyStructSequence_Desc","synthetic":true,"types":[]},{"text":"impl Unpin for PyTupleObject","synthetic":true,"types":[]},{"text":"impl Unpin for PyWeakReference","synthetic":true,"types":[]},{"text":"impl Unpin for PyMemAllocatorDomain","synthetic":true,"types":[]},{"text":"impl Unpin for PyGILState_STATE","synthetic":true,"types":[]},{"text":"impl Unpin for PyMemberDef","synthetic":true,"types":[]},{"text":"impl Unpin for PyTryBlock","synthetic":true,"types":[]},{"text":"impl Unpin for PyFrameObject","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for FreeList&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Slot&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for GILOnceCell&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for PanicException","synthetic":true,"types":[]},{"text":"impl Unpin for PyModule","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for PyCell&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as PyTypeInfo&gt;::BaseLayout: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as PyClass&gt;::Dict: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as PyClassSend&gt;::ThreadChecker: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as PyClass&gt;::WeakRef: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'p, T&gt; Unpin for PyRef&lt;'p, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'p, T&gt; Unpin for PyRefMut&lt;'p, T&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for PyBorrowError","synthetic":true,"types":[]},{"text":"impl Unpin for PyBorrowMutError","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for PyNativeTypeInitializer&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for PyClassInitializer&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as PyTypeInfo&gt;::BaseType as PyTypeInfo&gt;::Initializer: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for PyClassDummySlot","synthetic":true,"types":[]},{"text":"impl Unpin for PyClassDictSlot","synthetic":true,"types":[]},{"text":"impl Unpin for PyClassWeakRefSlot","synthetic":true,"types":[]},{"text":"impl Unpin for PyBool","synthetic":true,"types":[]},{"text":"impl Unpin for PyByteArray","synthetic":true,"types":[]},{"text":"impl Unpin for PyBytes","synthetic":true,"types":[]},{"text":"impl Unpin for PyComplex","synthetic":true,"types":[]},{"text":"impl Unpin for PyDate","synthetic":true,"types":[]},{"text":"impl Unpin for PyDateTime","synthetic":true,"types":[]},{"text":"impl Unpin for PyDelta","synthetic":true,"types":[]},{"text":"impl Unpin for PyTime","synthetic":true,"types":[]},{"text":"impl Unpin for PyTzInfo","synthetic":true,"types":[]},{"text":"impl Unpin for PyDict","synthetic":true,"types":[]},{"text":"impl Unpin for PyFloat","synthetic":true,"types":[]},{"text":"impl Unpin for PyCFunction","synthetic":true,"types":[]},{"text":"impl Unpin for PyFunction","synthetic":true,"types":[]},{"text":"impl Unpin for PyIterator","synthetic":true,"types":[]},{"text":"impl Unpin for PyList","synthetic":true,"types":[]},{"text":"impl Unpin for PyLong","synthetic":true,"types":[]},{"text":"impl Unpin for PySequence","synthetic":true,"types":[]},{"text":"impl Unpin for PyFrozenSet","synthetic":true,"types":[]},{"text":"impl Unpin for PySet","synthetic":true,"types":[]},{"text":"impl Unpin for PySlice","synthetic":true,"types":[]},{"text":"impl Unpin for PySliceIndices","synthetic":true,"types":[]},{"text":"impl Unpin for PyString","synthetic":true,"types":[]},{"text":"impl Unpin for PyTuple","synthetic":true,"types":[]},{"text":"impl Unpin for PyType","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()