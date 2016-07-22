/****************************************************************************
** Meta object code from reading C++ file 'default_collisions_widget.h'
**
** Created by: The Qt Meta Object Compiler version 67 (Qt 5.5.1)
**
** WARNING! All changes made in this file will be lost!
*****************************************************************************/

#include "../../src/moveit_setup_assistant/src/widgets/default_collisions_widget.h"
#include <QtCore/qbytearray.h>
#include <QtCore/qmetatype.h>
#if !defined(Q_MOC_OUTPUT_REVISION)
#error "The header file 'default_collisions_widget.h' doesn't include <QObject>."
#elif Q_MOC_OUTPUT_REVISION != 67
#error "This file was generated using the moc from 5.5.1. It"
#error "cannot be used with the include files from this version of Qt."
#error "(The moc has changed too much.)"
#endif

QT_BEGIN_MOC_NAMESPACE
struct qt_meta_stringdata_moveit_setup_assistant__DefaultCollisionsWidget_t {
    QByteArrayData data[14];
    char stringdata0[196];
};
#define QT_MOC_LITERAL(idx, ofs, len) \
    Q_STATIC_BYTE_ARRAY_DATA_HEADER_INITIALIZER_WITH_OFFSET(len, \
    qptrdiff(offsetof(qt_meta_stringdata_moveit_setup_assistant__DefaultCollisionsWidget_t, stringdata0) + ofs \
        - idx * sizeof(QByteArrayData)) \
    )
static const qt_meta_stringdata_moveit_setup_assistant__DefaultCollisionsWidget_t qt_meta_stringdata_moveit_setup_assistant__DefaultCollisionsWidget = {
    {
QT_MOC_LITERAL(0, 0, 47), // "moveit_setup_assistant::Defau..."
QT_MOC_LITERAL(1, 48, 22), // "generateCollisionTable"
QT_MOC_LITERAL(2, 71, 0), // ""
QT_MOC_LITERAL(3, 72, 18), // "changeDensityLabel"
QT_MOC_LITERAL(4, 91, 5), // "value"
QT_MOC_LITERAL(5, 97, 18), // "loadCollisionTable"
QT_MOC_LITERAL(6, 116, 23), // "collisionCheckboxToggle"
QT_MOC_LITERAL(7, 140, 14), // "toggleCheckBox"
QT_MOC_LITERAL(8, 155, 1), // "j"
QT_MOC_LITERAL(9, 157, 1), // "i"
QT_MOC_LITERAL(10, 159, 14), // "previewClicked"
QT_MOC_LITERAL(11, 174, 3), // "row"
QT_MOC_LITERAL(12, 178, 6), // "column"
QT_MOC_LITERAL(13, 185, 10) // "focusGiven"

    },
    "moveit_setup_assistant::DefaultCollisionsWidget\0"
    "generateCollisionTable\0\0changeDensityLabel\0"
    "value\0loadCollisionTable\0"
    "collisionCheckboxToggle\0toggleCheckBox\0"
    "j\0i\0previewClicked\0row\0column\0focusGiven"
};
#undef QT_MOC_LITERAL

static const uint qt_meta_data_moveit_setup_assistant__DefaultCollisionsWidget[] = {

 // content:
       7,       // revision
       0,       // classname
       0,    0, // classinfo
       7,   14, // methods
       0,    0, // properties
       0,    0, // enums/sets
       0,    0, // constructors
       0,       // flags
       0,       // signalCount

 // slots: name, argc, parameters, tag, flags
       1,    0,   49,    2, 0x08 /* Private */,
       3,    1,   50,    2, 0x08 /* Private */,
       5,    0,   53,    2, 0x08 /* Private */,
       6,    0,   54,    2, 0x08 /* Private */,
       7,    2,   55,    2, 0x08 /* Private */,
      10,    2,   60,    2, 0x08 /* Private */,
      13,    0,   65,    2, 0x08 /* Private */,

 // slots: parameters
    QMetaType::Void,
    QMetaType::Void, QMetaType::Int,    4,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void, QMetaType::Int, QMetaType::Int,    8,    9,
    QMetaType::Void, QMetaType::Int, QMetaType::Int,   11,   12,
    QMetaType::Void,

       0        // eod
};

void moveit_setup_assistant::DefaultCollisionsWidget::qt_static_metacall(QObject *_o, QMetaObject::Call _c, int _id, void **_a)
{
    if (_c == QMetaObject::InvokeMetaMethod) {
        DefaultCollisionsWidget *_t = static_cast<DefaultCollisionsWidget *>(_o);
        Q_UNUSED(_t)
        switch (_id) {
        case 0: _t->generateCollisionTable(); break;
        case 1: _t->changeDensityLabel((*reinterpret_cast< int(*)>(_a[1]))); break;
        case 2: _t->loadCollisionTable(); break;
        case 3: _t->collisionCheckboxToggle(); break;
        case 4: _t->toggleCheckBox((*reinterpret_cast< int(*)>(_a[1])),(*reinterpret_cast< int(*)>(_a[2]))); break;
        case 5: _t->previewClicked((*reinterpret_cast< int(*)>(_a[1])),(*reinterpret_cast< int(*)>(_a[2]))); break;
        case 6: _t->focusGiven(); break;
        default: ;
        }
    }
}

const QMetaObject moveit_setup_assistant::DefaultCollisionsWidget::staticMetaObject = {
    { &SetupScreenWidget::staticMetaObject, qt_meta_stringdata_moveit_setup_assistant__DefaultCollisionsWidget.data,
      qt_meta_data_moveit_setup_assistant__DefaultCollisionsWidget,  qt_static_metacall, Q_NULLPTR, Q_NULLPTR}
};


const QMetaObject *moveit_setup_assistant::DefaultCollisionsWidget::metaObject() const
{
    return QObject::d_ptr->metaObject ? QObject::d_ptr->dynamicMetaObject() : &staticMetaObject;
}

void *moveit_setup_assistant::DefaultCollisionsWidget::qt_metacast(const char *_clname)
{
    if (!_clname) return Q_NULLPTR;
    if (!strcmp(_clname, qt_meta_stringdata_moveit_setup_assistant__DefaultCollisionsWidget.stringdata0))
        return static_cast<void*>(const_cast< DefaultCollisionsWidget*>(this));
    return SetupScreenWidget::qt_metacast(_clname);
}

int moveit_setup_assistant::DefaultCollisionsWidget::qt_metacall(QMetaObject::Call _c, int _id, void **_a)
{
    _id = SetupScreenWidget::qt_metacall(_c, _id, _a);
    if (_id < 0)
        return _id;
    if (_c == QMetaObject::InvokeMetaMethod) {
        if (_id < 7)
            qt_static_metacall(this, _c, _id, _a);
        _id -= 7;
    } else if (_c == QMetaObject::RegisterMethodArgumentMetaType) {
        if (_id < 7)
            *reinterpret_cast<int*>(_a[0]) = -1;
        _id -= 7;
    }
    return _id;
}
QT_END_MOC_NAMESPACE
