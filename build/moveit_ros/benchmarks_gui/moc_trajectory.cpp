/****************************************************************************
** Meta object code from reading C++ file 'trajectory.h'
**
** Created by: The Qt Meta Object Compiler version 67 (Qt 5.5.1)
**
** WARNING! All changes made in this file will be lost!
*****************************************************************************/

#include "../../../src/moveit_ros/benchmarks_gui/include/trajectory.h"
#include <QtCore/qbytearray.h>
#include <QtCore/qmetatype.h>
#if !defined(Q_MOC_OUTPUT_REVISION)
#error "The header file 'trajectory.h' doesn't include <QObject>."
#elif Q_MOC_OUTPUT_REVISION != 67
#error "This file was generated using the moc from 5.5.1. It"
#error "cannot be used with the include files from this version of Qt."
#error "(The moc has changed too much.)"
#endif

QT_BEGIN_MOC_NAMESPACE
struct qt_meta_stringdata_benchmark_tool__Trajectory_t {
    QByteArrayData data[8];
    char stringdata0[166];
};
#define QT_MOC_LITERAL(idx, ofs, len) \
    Q_STATIC_BYTE_ARRAY_DATA_HEADER_INITIALIZER_WITH_OFFSET(len, \
    qptrdiff(offsetof(qt_meta_stringdata_benchmark_tool__Trajectory_t, stringdata0) + ofs \
        - idx * sizeof(QByteArrayData)) \
    )
static const qt_meta_stringdata_benchmark_tool__Trajectory_t qt_meta_stringdata_benchmark_tool__Trajectory = {
    {
QT_MOC_LITERAL(0, 0, 26), // "benchmark_tool::Trajectory"
QT_MOC_LITERAL(1, 27, 24), // "trajectoryMarkerFeedback"
QT_MOC_LITERAL(2, 52, 0), // ""
QT_MOC_LITERAL(3, 53, 46), // "visualization_msgs::Interacti..."
QT_MOC_LITERAL(4, 100, 8), // "feedback"
QT_MOC_LITERAL(5, 109, 18), // "handMarkerFeedback"
QT_MOC_LITERAL(6, 128, 19), // "startMarkerFeedback"
QT_MOC_LITERAL(7, 148, 17) // "endMarkerFeedback"

    },
    "benchmark_tool::Trajectory\0"
    "trajectoryMarkerFeedback\0\0"
    "visualization_msgs::InteractiveMarkerFeedback&\0"
    "feedback\0handMarkerFeedback\0"
    "startMarkerFeedback\0endMarkerFeedback"
};
#undef QT_MOC_LITERAL

static const uint qt_meta_data_benchmark_tool__Trajectory[] = {

 // content:
       7,       // revision
       0,       // classname
       0,    0, // classinfo
       4,   14, // methods
       0,    0, // properties
       0,    0, // enums/sets
       0,    0, // constructors
       0,       // flags
       0,       // signalCount

 // slots: name, argc, parameters, tag, flags
       1,    1,   34,    2, 0x0a /* Public */,
       5,    1,   37,    2, 0x0a /* Public */,
       6,    1,   40,    2, 0x0a /* Public */,
       7,    1,   43,    2, 0x0a /* Public */,

 // slots: parameters
    QMetaType::Void, 0x80000000 | 3,    4,
    QMetaType::Void, 0x80000000 | 3,    4,
    QMetaType::Void, 0x80000000 | 3,    4,
    QMetaType::Void, 0x80000000 | 3,    4,

       0        // eod
};

void benchmark_tool::Trajectory::qt_static_metacall(QObject *_o, QMetaObject::Call _c, int _id, void **_a)
{
    if (_c == QMetaObject::InvokeMetaMethod) {
        Trajectory *_t = static_cast<Trajectory *>(_o);
        Q_UNUSED(_t)
        switch (_id) {
        case 0: _t->trajectoryMarkerFeedback((*reinterpret_cast< visualization_msgs::InteractiveMarkerFeedback(*)>(_a[1]))); break;
        case 1: _t->handMarkerFeedback((*reinterpret_cast< visualization_msgs::InteractiveMarkerFeedback(*)>(_a[1]))); break;
        case 2: _t->startMarkerFeedback((*reinterpret_cast< visualization_msgs::InteractiveMarkerFeedback(*)>(_a[1]))); break;
        case 3: _t->endMarkerFeedback((*reinterpret_cast< visualization_msgs::InteractiveMarkerFeedback(*)>(_a[1]))); break;
        default: ;
        }
    }
}

const QMetaObject benchmark_tool::Trajectory::staticMetaObject = {
    { &QObject::staticMetaObject, qt_meta_stringdata_benchmark_tool__Trajectory.data,
      qt_meta_data_benchmark_tool__Trajectory,  qt_static_metacall, Q_NULLPTR, Q_NULLPTR}
};


const QMetaObject *benchmark_tool::Trajectory::metaObject() const
{
    return QObject::d_ptr->metaObject ? QObject::d_ptr->dynamicMetaObject() : &staticMetaObject;
}

void *benchmark_tool::Trajectory::qt_metacast(const char *_clname)
{
    if (!_clname) return Q_NULLPTR;
    if (!strcmp(_clname, qt_meta_stringdata_benchmark_tool__Trajectory.stringdata0))
        return static_cast<void*>(const_cast< Trajectory*>(this));
    return QObject::qt_metacast(_clname);
}

int benchmark_tool::Trajectory::qt_metacall(QMetaObject::Call _c, int _id, void **_a)
{
    _id = QObject::qt_metacall(_c, _id, _a);
    if (_id < 0)
        return _id;
    if (_c == QMetaObject::InvokeMetaMethod) {
        if (_id < 4)
            qt_static_metacall(this, _c, _id, _a);
        _id -= 4;
    } else if (_c == QMetaObject::RegisterMethodArgumentMetaType) {
        if (_id < 4)
            *reinterpret_cast<int*>(_a[0]) = -1;
        _id -= 4;
    }
    return _id;
}
QT_END_MOC_NAMESPACE
