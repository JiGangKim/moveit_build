# This Python file uses the following encoding: utf-8
"""autogenerated by genpy from moveit_msgs/AllowedCollisionMatrix.msg. Do not edit."""
import sys
python3 = True if sys.hexversion > 0x03000000 else False
import genpy
import struct

import moveit_msgs.msg

class AllowedCollisionMatrix(genpy.Message):
  _md5sum = "aedce13587eef0d79165a075659c1879"
  _type = "moveit_msgs/AllowedCollisionMatrix"
  _has_header = False #flag to mark the presence of a Header object
  _full_text = """# The list of entry names in the matrix
string[] entry_names

# The individual entries in the allowed collision matrix
# square, symmetric, with same order as entry_names
AllowedCollisionEntry[] entry_values

# In addition to the collision matrix itself, we also have 
# the default entry value for each entry name.

# If the allowed collision flag is queried for a pair of names (n1, n2)
# that is not found in the collision matrix itself, the value of
# the collision flag is considered to be that of the entry (n1 or n2)
# specified in the list below. If both n1 and n2 are found in the list 
# of defaults, the result is computed with an AND operation

string[] default_entry_names
bool[] default_entry_values

================================================================================
MSG: moveit_msgs/AllowedCollisionEntry
# whether or not collision checking is enabled
bool[] enabled
"""
  __slots__ = ['entry_names','entry_values','default_entry_names','default_entry_values']
  _slot_types = ['string[]','moveit_msgs/AllowedCollisionEntry[]','string[]','bool[]']

  def __init__(self, *args, **kwds):
    """
    Constructor. Any message fields that are implicitly/explicitly
    set to None will be assigned a default value. The recommend
    use is keyword arguments as this is more robust to future message
    changes.  You cannot mix in-order arguments and keyword arguments.

    The available fields are:
       entry_names,entry_values,default_entry_names,default_entry_values

    :param args: complete set of field values, in .msg order
    :param kwds: use keyword arguments corresponding to message field names
    to set specific fields.
    """
    if args or kwds:
      super(AllowedCollisionMatrix, self).__init__(*args, **kwds)
      #message fields cannot be None, assign default values for those that are
      if self.entry_names is None:
        self.entry_names = []
      if self.entry_values is None:
        self.entry_values = []
      if self.default_entry_names is None:
        self.default_entry_names = []
      if self.default_entry_values is None:
        self.default_entry_values = []
    else:
      self.entry_names = []
      self.entry_values = []
      self.default_entry_names = []
      self.default_entry_values = []

  def _get_types(self):
    """
    internal API method
    """
    return self._slot_types

  def serialize(self, buff):
    """
    serialize message into buffer
    :param buff: buffer, ``StringIO``
    """
    try:
      length = len(self.entry_names)
      buff.write(_struct_I.pack(length))
      for val1 in self.entry_names:
        length = len(val1)
        if python3 or type(val1) == unicode:
          val1 = val1.encode('utf-8')
          length = len(val1)
        if python3:
          buff.write(struct.pack('<I%sB'%length, length, *val1))
        else:
          buff.write(struct.pack('<I%ss'%length, length, val1))
      length = len(self.entry_values)
      buff.write(_struct_I.pack(length))
      for val1 in self.entry_values:
        length = len(val1.enabled)
        buff.write(_struct_I.pack(length))
        pattern = '<%sB'%length
        buff.write(struct.pack(pattern, *val1.enabled))
      length = len(self.default_entry_names)
      buff.write(_struct_I.pack(length))
      for val1 in self.default_entry_names:
        length = len(val1)
        if python3 or type(val1) == unicode:
          val1 = val1.encode('utf-8')
          length = len(val1)
        if python3:
          buff.write(struct.pack('<I%sB'%length, length, *val1))
        else:
          buff.write(struct.pack('<I%ss'%length, length, val1))
      length = len(self.default_entry_values)
      buff.write(_struct_I.pack(length))
      pattern = '<%sB'%length
      buff.write(struct.pack(pattern, *self.default_entry_values))
    except struct.error as se: self._check_types(struct.error("%s: '%s' when writing '%s'" % (type(se), str(se), str(locals().get('_x', self)))))
    except TypeError as te: self._check_types(ValueError("%s: '%s' when writing '%s'" % (type(te), str(te), str(locals().get('_x', self)))))

  def deserialize(self, str):
    """
    unpack serialized message in str into this message instance
    :param str: byte array of serialized message, ``str``
    """
    try:
      if self.entry_values is None:
        self.entry_values = None
      end = 0
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      self.entry_names = []
      for i in range(0, length):
        start = end
        end += 4
        (length,) = _struct_I.unpack(str[start:end])
        start = end
        end += length
        if python3:
          val1 = str[start:end].decode('utf-8')
        else:
          val1 = str[start:end]
        self.entry_names.append(val1)
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      self.entry_values = []
      for i in range(0, length):
        val1 = moveit_msgs.msg.AllowedCollisionEntry()
        start = end
        end += 4
        (length,) = _struct_I.unpack(str[start:end])
        pattern = '<%sB'%length
        start = end
        end += struct.calcsize(pattern)
        val1.enabled = struct.unpack(pattern, str[start:end])
        val1.enabled = map(bool, val1.enabled)
        self.entry_values.append(val1)
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      self.default_entry_names = []
      for i in range(0, length):
        start = end
        end += 4
        (length,) = _struct_I.unpack(str[start:end])
        start = end
        end += length
        if python3:
          val1 = str[start:end].decode('utf-8')
        else:
          val1 = str[start:end]
        self.default_entry_names.append(val1)
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      pattern = '<%sB'%length
      start = end
      end += struct.calcsize(pattern)
      self.default_entry_values = struct.unpack(pattern, str[start:end])
      self.default_entry_values = map(bool, self.default_entry_values)
      return self
    except struct.error as e:
      raise genpy.DeserializationError(e) #most likely buffer underfill


  def serialize_numpy(self, buff, numpy):
    """
    serialize message with numpy array types into buffer
    :param buff: buffer, ``StringIO``
    :param numpy: numpy python module
    """
    try:
      length = len(self.entry_names)
      buff.write(_struct_I.pack(length))
      for val1 in self.entry_names:
        length = len(val1)
        if python3 or type(val1) == unicode:
          val1 = val1.encode('utf-8')
          length = len(val1)
        if python3:
          buff.write(struct.pack('<I%sB'%length, length, *val1))
        else:
          buff.write(struct.pack('<I%ss'%length, length, val1))
      length = len(self.entry_values)
      buff.write(_struct_I.pack(length))
      for val1 in self.entry_values:
        length = len(val1.enabled)
        buff.write(_struct_I.pack(length))
        pattern = '<%sB'%length
        buff.write(val1.enabled.tostring())
      length = len(self.default_entry_names)
      buff.write(_struct_I.pack(length))
      for val1 in self.default_entry_names:
        length = len(val1)
        if python3 or type(val1) == unicode:
          val1 = val1.encode('utf-8')
          length = len(val1)
        if python3:
          buff.write(struct.pack('<I%sB'%length, length, *val1))
        else:
          buff.write(struct.pack('<I%ss'%length, length, val1))
      length = len(self.default_entry_values)
      buff.write(_struct_I.pack(length))
      pattern = '<%sB'%length
      buff.write(self.default_entry_values.tostring())
    except struct.error as se: self._check_types(struct.error("%s: '%s' when writing '%s'" % (type(se), str(se), str(locals().get('_x', self)))))
    except TypeError as te: self._check_types(ValueError("%s: '%s' when writing '%s'" % (type(te), str(te), str(locals().get('_x', self)))))

  def deserialize_numpy(self, str, numpy):
    """
    unpack serialized message in str into this message instance using numpy for array types
    :param str: byte array of serialized message, ``str``
    :param numpy: numpy python module
    """
    try:
      if self.entry_values is None:
        self.entry_values = None
      end = 0
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      self.entry_names = []
      for i in range(0, length):
        start = end
        end += 4
        (length,) = _struct_I.unpack(str[start:end])
        start = end
        end += length
        if python3:
          val1 = str[start:end].decode('utf-8')
        else:
          val1 = str[start:end]
        self.entry_names.append(val1)
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      self.entry_values = []
      for i in range(0, length):
        val1 = moveit_msgs.msg.AllowedCollisionEntry()
        start = end
        end += 4
        (length,) = _struct_I.unpack(str[start:end])
        pattern = '<%sB'%length
        start = end
        end += struct.calcsize(pattern)
        val1.enabled = numpy.frombuffer(str[start:end], dtype=numpy.bool, count=length)
        val1.enabled = map(bool, val1.enabled)
        self.entry_values.append(val1)
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      self.default_entry_names = []
      for i in range(0, length):
        start = end
        end += 4
        (length,) = _struct_I.unpack(str[start:end])
        start = end
        end += length
        if python3:
          val1 = str[start:end].decode('utf-8')
        else:
          val1 = str[start:end]
        self.default_entry_names.append(val1)
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      pattern = '<%sB'%length
      start = end
      end += struct.calcsize(pattern)
      self.default_entry_values = numpy.frombuffer(str[start:end], dtype=numpy.bool, count=length)
      self.default_entry_values = map(bool, self.default_entry_values)
      return self
    except struct.error as e:
      raise genpy.DeserializationError(e) #most likely buffer underfill

_struct_I = genpy.struct_I
