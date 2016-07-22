/****************************************************************************
** Meta object code from reading C++ file 'trajectory_visualization.h'
**
** Created by: The Qt Meta Object Compiler version 67 (Qt 5.5.1)
**
** WARNING! All changes made in this file will be lost!
*****************************************************************************/

#include "../../../src/moveit_ros/visualization/rviz_plugin_render_tools/include/moveit/rviz_plugin_render_tools/trajectory_visualization.h"
#include <QtCore/qbytearray.h>
#include <QtCore/qmetatype.h>
#if !defined(Q_MOC_OUTPUT_REVISION)
#error "The header file 'trajectory_visualization.h' doesn't include <QObject>."
#elif Q_MOC_OUTPUT_REVISION != 67
#error "This file was generated using the moc from 5.5.1. It"
#error "cannot be used with the include files from this version of Qt."
#error "(The moc has changed too much.)"
#endif

QT_BEGIN_MOC_NAMESPACE
struct qt_meta_stringdata_moveit_rviz_plugin__TrajectoryVisualization_t {
    QByteArrayData data[10];
    char stringdata0[241];
};
#define QT_MOC_LITERAL(idx, ofs, len) \
    Q_STATIC_BYTE_ARRAY_DATA_HEADER_INITIALIZER_WITH_OFFSET(len, \
    qptrdiff(offsetof(qt_meta_stringdata_moveit_rviz_plugin__TrajectoryVisualization_t, stringdata0) + ofs \
        - idx * sizeof(QByteArrayData)) \
    )
static const qt_meta_stringdata_moveit_rviz_plugin__TrajectoryVisualization_t qt_meta_stringdata_moveit_rviz_plugin__TrajectoryVisualization = {
    {
QT_MOC_LITERAL(0, 0, 43), // "moveit_rviz_plugin::Trajector..."
QT_MOC_LITERAL(1, 44, 23), // "interruptCurrentDisplay"
QT_MOC_LITERAL(2, 68, 0), // ""
QT_MOC_LITERAL(3, 69, 31), // "changedDisplayPathVisualEnabled"
QT_MOC_LITERAL(4, 101, 34), // "changedDisplayPathCollisionEn..."
QT_MOC_LITERAL(5, 136, 21), // "changedRobotPathAlpha"
QT_MOC_LITERAL(6, 158, 18), // "changedLoopDisplay"
QT_MOC_LITERAL(7, 177, 16), // "changedShowTrail"
QT_MOC_LITERAL(8, 194, 22), // "changedTrajectoryTopic"
QT_MOC_LITERAL(9, 217, 23) // "changedStateDisplayTime"

    },
    "moveit_rviz_plugin::TrajectoryVisualization\0"
    "interruptCurrentDisplay\0\0"
    "changedDisplayPathVisualEnabled\0"
    "changedDisplayPathCollisionEnabled\0"
    "changedRobotPathAlpha\0changedLoopDisplay\0"
    "changedShowTrail\0changedTrajectoryTopic\0"
    "changedStateDisplayTime"
};
#undef QT_MOC_LITERAL

static const uint qt_meta_data_moveit_rviz_plugin__TrajectoryVisualization[] = {

 // content:
       7,       // revision
       0,       // classname
       0,    0, // classinfo
       8,   14, // methods
       0,    0, // properties
       0,    0, // enums/sets
       0,    0, // constructors
       0,       // flags
       0,       // signalCount

 // slots: name, argc, parameters, tag, flags
       1,    0,   54,    2, 0x0a /* Public */,
       3,    0,   55,    2, 0x08 /* Private */,
       4,    0,   56,    2, 0x08 /* Private */,
       5,    0,   57,    2, 0x08 /* Private */,
       6,    0,   58,    2, 0x08 /* Private */,
       7,    0,   59,    2, 0x08 /* Private */,
       8,    0,   60,    2, 0x08 /* Private */,
       9,    0,   61,    2, 0x08 /* Private */,

 // slots: parameters
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,

       0        // eod
};

void moveit_rviz_plugin::TrajectoryVisualization::qt_static_metacall(QObject *_o, QMetaObject::Call _c, int _id, void **_a)
{
    if (_c == QMetaObject::InvokeMetaMethod) {
        TrajectoryVisualization *_t = static_cast<TrajectoryVisualization *>(_o);
        Q_UNUSED(_t)
        switch (_id) {
        case 0: _t->interruptCurrentDisplay(); break;
        case 1: _t->changedDisplayPathVisualEnabled(); break;
        case 2: _t->changedDisplayPathCollisionEnabled(); break;
        case 3: _t->changedRobotPathAlpha(); break;
        case 4: _t->changedLoopDisplay(); break;
        case 5: _t->changedShowTrail(); break;
        case 6: _t->changedTrajectoryTopic(); break;
        case 7: _t->changedStateDisplayTime(); break;
        default: ;
        }
    }
    Q_UNUSED(_a);
}

const QMetaObject moveit_rviz_plugin::TrajectoryVisualization::staticMetaObject = {
    { &QObject::staticMetaObject, qt_meta_stringdata_moveit_rviz_plugin__TrajectoryVisualization.data,
      qt_meta_data_moveit_rviz_plugin__TrajectoryVisualization,  qt_static_metacall, Q_NULLPTR, Q_NULLPTR}
};


const QMetaObject *moveit_rviz_plugin::TrajectoryVisualization::metaObject() const
{
    return QObject::d_ptr->metaObject ? QObject::d_ptr->dynamicMetaObject() : &staticMetaObject;
}

void *moveit_rviz_plugin::TrajectoryVisualization::qt_metacast(const char *_clname)
{
    if (!_clname) return Q_NULLPTR;
    if (!strcmp(_clname, qt_meta_stringdata_moveit_rviz_plugin__TrajectoryVisualization.stringdata0))
        return static_cast<void*>(const_cast< TrajectoryVisualization*>(this));
    return QObject::qt_metacast(_clname);
}

int moveit_rviz_plugin::TrajectoryVisualization::qt_metacall(QMetaObject::Call _c, int _id, void **_a)
{
    _id = QObject::qt_metacall(_c, _id, _a);
    if (_id < 0)
        return _id;
    if (_c == QMetaObject::InvokeMetaMethod) {
        if (_id < 8)
            qt_static_metacall(this, _c, _id, _a);
        _id -= 8;
    } else if (_c == QMetaObject::RegisterMethodArgumentMetaType) {
        if (_id < 8)
            *reinterpret_cast<int*>(_a[0]) = -1;
        _id -= 8;
    }
    return _id;
}
QT_END_MOC_NAMESPACE
