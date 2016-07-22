/****************************************************************************
** Meta object code from reading C++ file 'motion_planning_frame.h'
**
** Created by: The Qt Meta Object Compiler version 67 (Qt 5.5.1)
**
** WARNING! All changes made in this file will be lost!
*****************************************************************************/

#include "../../../src/moveit_ros/visualization/motion_planning_rviz_plugin/include/moveit/motion_planning_rviz_plugin/motion_planning_frame.h"
#include <QtCore/qbytearray.h>
#include <QtCore/qmetatype.h>
#if !defined(Q_MOC_OUTPUT_REVISION)
#error "The header file 'motion_planning_frame.h' doesn't include <QObject>."
#elif Q_MOC_OUTPUT_REVISION != 67
#error "This file was generated using the moc from 5.5.1. It"
#error "cannot be used with the include files from this version of Qt."
#error "(The moc has changed too much.)"
#endif

QT_BEGIN_MOC_NAMESPACE
struct qt_meta_stringdata_moveit_rviz_plugin__MotionPlanningFrame_t {
    QByteArrayData data[65];
    char stringdata0[1447];
};
#define QT_MOC_LITERAL(idx, ofs, len) \
    Q_STATIC_BYTE_ARRAY_DATA_HEADER_INITIALIZER_WITH_OFFSET(len, \
    qptrdiff(offsetof(qt_meta_stringdata_moveit_rviz_plugin__MotionPlanningFrame_t, stringdata0) + ofs \
        - idx * sizeof(QByteArrayData)) \
    )
static const qt_meta_stringdata_moveit_rviz_plugin__MotionPlanningFrame_t qt_meta_stringdata_moveit_rviz_plugin__MotionPlanningFrame = {
    {
QT_MOC_LITERAL(0, 0, 39), // "moveit_rviz_plugin::MotionPla..."
QT_MOC_LITERAL(1, 40, 16), // "planningFinished"
QT_MOC_LITERAL(2, 57, 0), // ""
QT_MOC_LITERAL(3, 58, 28), // "databaseConnectButtonClicked"
QT_MOC_LITERAL(4, 87, 25), // "publishSceneButtonClicked"
QT_MOC_LITERAL(5, 113, 29), // "planningAlgorithmIndexChanged"
QT_MOC_LITERAL(6, 143, 5), // "index"
QT_MOC_LITERAL(7, 149, 20), // "resetDbButtonClicked"
QT_MOC_LITERAL(8, 170, 20), // "approximateIKChanged"
QT_MOC_LITERAL(9, 191, 5), // "state"
QT_MOC_LITERAL(10, 197, 17), // "planButtonClicked"
QT_MOC_LITERAL(11, 215, 20), // "executeButtonClicked"
QT_MOC_LITERAL(12, 236, 27), // "planAndExecuteButtonClicked"
QT_MOC_LITERAL(13, 264, 22), // "allowReplanningToggled"
QT_MOC_LITERAL(14, 287, 7), // "checked"
QT_MOC_LITERAL(15, 295, 19), // "allowLookingToggled"
QT_MOC_LITERAL(16, 315, 33), // "allowExternalProgramCommunica..."
QT_MOC_LITERAL(17, 349, 6), // "enable"
QT_MOC_LITERAL(18, 356, 27), // "pathConstraintsIndexChanged"
QT_MOC_LITERAL(19, 384, 26), // "useStartStateButtonClicked"
QT_MOC_LITERAL(20, 411, 25), // "useGoalStateButtonClicked"
QT_MOC_LITERAL(21, 437, 21), // "onClearOctomapClicked"
QT_MOC_LITERAL(22, 459, 23), // "importFileButtonClicked"
QT_MOC_LITERAL(23, 483, 22), // "importUrlButtonClicked"
QT_MOC_LITERAL(24, 506, 23), // "clearSceneButtonClicked"
QT_MOC_LITERAL(25, 530, 17), // "sceneScaleChanged"
QT_MOC_LITERAL(26, 548, 5), // "value"
QT_MOC_LITERAL(27, 554, 21), // "sceneScaleStartChange"
QT_MOC_LITERAL(28, 576, 19), // "sceneScaleEndChange"
QT_MOC_LITERAL(29, 596, 25), // "removeObjectButtonClicked"
QT_MOC_LITERAL(30, 622, 30), // "selectedCollisionObjectChanged"
QT_MOC_LITERAL(31, 653, 22), // "objectPoseValueChanged"
QT_MOC_LITERAL(32, 676, 22), // "collisionObjectChanged"
QT_MOC_LITERAL(33, 699, 16), // "QListWidgetItem*"
QT_MOC_LITERAL(34, 716, 4), // "item"
QT_MOC_LITERAL(35, 721, 17), // "imProcessFeedback"
QT_MOC_LITERAL(36, 739, 46), // "visualization_msgs::Interacti..."
QT_MOC_LITERAL(37, 786, 8), // "feedback"
QT_MOC_LITERAL(38, 795, 27), // "copySelectedCollisionObject"
QT_MOC_LITERAL(39, 823, 25), // "exportAsTextButtonClicked"
QT_MOC_LITERAL(40, 849, 27), // "importFromTextButtonClicked"
QT_MOC_LITERAL(41, 877, 22), // "saveSceneButtonClicked"
QT_MOC_LITERAL(42, 900, 24), // "planningSceneItemClicked"
QT_MOC_LITERAL(43, 925, 22), // "saveQueryButtonClicked"
QT_MOC_LITERAL(44, 948, 24), // "deleteSceneButtonClicked"
QT_MOC_LITERAL(45, 973, 24), // "deleteQueryButtonClicked"
QT_MOC_LITERAL(46, 998, 22), // "loadSceneButtonClicked"
QT_MOC_LITERAL(47, 1021, 22), // "loadQueryButtonClicked"
QT_MOC_LITERAL(48, 1044, 24), // "warehouseItemNameChanged"
QT_MOC_LITERAL(49, 1069, 16), // "QTreeWidgetItem*"
QT_MOC_LITERAL(50, 1086, 6), // "column"
QT_MOC_LITERAL(51, 1093, 22), // "loadStateButtonClicked"
QT_MOC_LITERAL(52, 1116, 27), // "saveStartStateButtonClicked"
QT_MOC_LITERAL(53, 1144, 26), // "saveGoalStateButtonClicked"
QT_MOC_LITERAL(54, 1171, 24), // "removeStateButtonClicked"
QT_MOC_LITERAL(55, 1196, 24), // "clearStatesButtonClicked"
QT_MOC_LITERAL(56, 1221, 28), // "setAsStartStateButtonClicked"
QT_MOC_LITERAL(57, 1250, 27), // "setAsGoalStateButtonClicked"
QT_MOC_LITERAL(58, 1278, 26), // "detectObjectsButtonClicked"
QT_MOC_LITERAL(59, 1305, 23), // "pickObjectButtonClicked"
QT_MOC_LITERAL(60, 1329, 24), // "placeObjectButtonClicked"
QT_MOC_LITERAL(61, 1354, 29), // "selectedDetectedObjectChanged"
QT_MOC_LITERAL(62, 1384, 21), // "detectedObjectChanged"
QT_MOC_LITERAL(63, 1406, 29), // "selectedSupportSurfaceChanged"
QT_MOC_LITERAL(64, 1436, 10) // "tabChanged"

    },
    "moveit_rviz_plugin::MotionPlanningFrame\0"
    "planningFinished\0\0databaseConnectButtonClicked\0"
    "publishSceneButtonClicked\0"
    "planningAlgorithmIndexChanged\0index\0"
    "resetDbButtonClicked\0approximateIKChanged\0"
    "state\0planButtonClicked\0executeButtonClicked\0"
    "planAndExecuteButtonClicked\0"
    "allowReplanningToggled\0checked\0"
    "allowLookingToggled\0"
    "allowExternalProgramCommunication\0"
    "enable\0pathConstraintsIndexChanged\0"
    "useStartStateButtonClicked\0"
    "useGoalStateButtonClicked\0"
    "onClearOctomapClicked\0importFileButtonClicked\0"
    "importUrlButtonClicked\0clearSceneButtonClicked\0"
    "sceneScaleChanged\0value\0sceneScaleStartChange\0"
    "sceneScaleEndChange\0removeObjectButtonClicked\0"
    "selectedCollisionObjectChanged\0"
    "objectPoseValueChanged\0collisionObjectChanged\0"
    "QListWidgetItem*\0item\0imProcessFeedback\0"
    "visualization_msgs::InteractiveMarkerFeedback&\0"
    "feedback\0copySelectedCollisionObject\0"
    "exportAsTextButtonClicked\0"
    "importFromTextButtonClicked\0"
    "saveSceneButtonClicked\0planningSceneItemClicked\0"
    "saveQueryButtonClicked\0deleteSceneButtonClicked\0"
    "deleteQueryButtonClicked\0"
    "loadSceneButtonClicked\0loadQueryButtonClicked\0"
    "warehouseItemNameChanged\0QTreeWidgetItem*\0"
    "column\0loadStateButtonClicked\0"
    "saveStartStateButtonClicked\0"
    "saveGoalStateButtonClicked\0"
    "removeStateButtonClicked\0"
    "clearStatesButtonClicked\0"
    "setAsStartStateButtonClicked\0"
    "setAsGoalStateButtonClicked\0"
    "detectObjectsButtonClicked\0"
    "pickObjectButtonClicked\0"
    "placeObjectButtonClicked\0"
    "selectedDetectedObjectChanged\0"
    "detectedObjectChanged\0"
    "selectedSupportSurfaceChanged\0tabChanged"
};
#undef QT_MOC_LITERAL

static const uint qt_meta_data_moveit_rviz_plugin__MotionPlanningFrame[] = {

 // content:
       7,       // revision
       0,       // classname
       0,    0, // classinfo
      52,   14, // methods
       0,    0, // properties
       0,    0, // enums/sets
       0,    0, // constructors
       0,       // flags
       1,       // signalCount

 // signals: name, argc, parameters, tag, flags
       1,    0,  274,    2, 0x06 /* Public */,

 // slots: name, argc, parameters, tag, flags
       3,    0,  275,    2, 0x08 /* Private */,
       4,    0,  276,    2, 0x08 /* Private */,
       5,    1,  277,    2, 0x08 /* Private */,
       7,    0,  280,    2, 0x08 /* Private */,
       8,    1,  281,    2, 0x08 /* Private */,
      10,    0,  284,    2, 0x08 /* Private */,
      11,    0,  285,    2, 0x08 /* Private */,
      12,    0,  286,    2, 0x08 /* Private */,
      13,    1,  287,    2, 0x08 /* Private */,
      15,    1,  290,    2, 0x08 /* Private */,
      16,    1,  293,    2, 0x08 /* Private */,
      18,    1,  296,    2, 0x08 /* Private */,
      19,    0,  299,    2, 0x08 /* Private */,
      20,    0,  300,    2, 0x08 /* Private */,
      21,    0,  301,    2, 0x08 /* Private */,
      22,    0,  302,    2, 0x08 /* Private */,
      23,    0,  303,    2, 0x08 /* Private */,
      24,    0,  304,    2, 0x08 /* Private */,
      25,    1,  305,    2, 0x08 /* Private */,
      27,    0,  308,    2, 0x08 /* Private */,
      28,    0,  309,    2, 0x08 /* Private */,
      29,    0,  310,    2, 0x08 /* Private */,
      30,    0,  311,    2, 0x08 /* Private */,
      31,    1,  312,    2, 0x08 /* Private */,
      32,    1,  315,    2, 0x08 /* Private */,
      35,    1,  318,    2, 0x08 /* Private */,
      38,    0,  321,    2, 0x08 /* Private */,
      39,    0,  322,    2, 0x08 /* Private */,
      40,    0,  323,    2, 0x08 /* Private */,
      41,    0,  324,    2, 0x08 /* Private */,
      42,    0,  325,    2, 0x08 /* Private */,
      43,    0,  326,    2, 0x08 /* Private */,
      44,    0,  327,    2, 0x08 /* Private */,
      45,    0,  328,    2, 0x08 /* Private */,
      46,    0,  329,    2, 0x08 /* Private */,
      47,    0,  330,    2, 0x08 /* Private */,
      48,    2,  331,    2, 0x08 /* Private */,
      51,    0,  336,    2, 0x08 /* Private */,
      52,    0,  337,    2, 0x08 /* Private */,
      53,    0,  338,    2, 0x08 /* Private */,
      54,    0,  339,    2, 0x08 /* Private */,
      55,    0,  340,    2, 0x08 /* Private */,
      56,    0,  341,    2, 0x08 /* Private */,
      57,    0,  342,    2, 0x08 /* Private */,
      58,    0,  343,    2, 0x08 /* Private */,
      59,    0,  344,    2, 0x08 /* Private */,
      60,    0,  345,    2, 0x08 /* Private */,
      61,    0,  346,    2, 0x08 /* Private */,
      62,    1,  347,    2, 0x08 /* Private */,
      63,    0,  350,    2, 0x08 /* Private */,
      64,    1,  351,    2, 0x08 /* Private */,

 // signals: parameters
    QMetaType::Void,

 // slots: parameters
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void, QMetaType::Int,    6,
    QMetaType::Void,
    QMetaType::Void, QMetaType::Int,    9,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void, QMetaType::Bool,   14,
    QMetaType::Void, QMetaType::Bool,   14,
    QMetaType::Void, QMetaType::Bool,   17,
    QMetaType::Void, QMetaType::Int,    6,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void, QMetaType::Int,   26,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void, QMetaType::Double,   26,
    QMetaType::Void, 0x80000000 | 33,   34,
    QMetaType::Void, 0x80000000 | 36,   37,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void, 0x80000000 | 49, QMetaType::Int,   34,   50,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void, 0x80000000 | 33,   34,
    QMetaType::Void,
    QMetaType::Void, QMetaType::Int,    6,

       0        // eod
};

void moveit_rviz_plugin::MotionPlanningFrame::qt_static_metacall(QObject *_o, QMetaObject::Call _c, int _id, void **_a)
{
    if (_c == QMetaObject::InvokeMetaMethod) {
        MotionPlanningFrame *_t = static_cast<MotionPlanningFrame *>(_o);
        Q_UNUSED(_t)
        switch (_id) {
        case 0: _t->planningFinished(); break;
        case 1: _t->databaseConnectButtonClicked(); break;
        case 2: _t->publishSceneButtonClicked(); break;
        case 3: _t->planningAlgorithmIndexChanged((*reinterpret_cast< int(*)>(_a[1]))); break;
        case 4: _t->resetDbButtonClicked(); break;
        case 5: _t->approximateIKChanged((*reinterpret_cast< int(*)>(_a[1]))); break;
        case 6: _t->planButtonClicked(); break;
        case 7: _t->executeButtonClicked(); break;
        case 8: _t->planAndExecuteButtonClicked(); break;
        case 9: _t->allowReplanningToggled((*reinterpret_cast< bool(*)>(_a[1]))); break;
        case 10: _t->allowLookingToggled((*reinterpret_cast< bool(*)>(_a[1]))); break;
        case 11: _t->allowExternalProgramCommunication((*reinterpret_cast< bool(*)>(_a[1]))); break;
        case 12: _t->pathConstraintsIndexChanged((*reinterpret_cast< int(*)>(_a[1]))); break;
        case 13: _t->useStartStateButtonClicked(); break;
        case 14: _t->useGoalStateButtonClicked(); break;
        case 15: _t->onClearOctomapClicked(); break;
        case 16: _t->importFileButtonClicked(); break;
        case 17: _t->importUrlButtonClicked(); break;
        case 18: _t->clearSceneButtonClicked(); break;
        case 19: _t->sceneScaleChanged((*reinterpret_cast< int(*)>(_a[1]))); break;
        case 20: _t->sceneScaleStartChange(); break;
        case 21: _t->sceneScaleEndChange(); break;
        case 22: _t->removeObjectButtonClicked(); break;
        case 23: _t->selectedCollisionObjectChanged(); break;
        case 24: _t->objectPoseValueChanged((*reinterpret_cast< double(*)>(_a[1]))); break;
        case 25: _t->collisionObjectChanged((*reinterpret_cast< QListWidgetItem*(*)>(_a[1]))); break;
        case 26: _t->imProcessFeedback((*reinterpret_cast< visualization_msgs::InteractiveMarkerFeedback(*)>(_a[1]))); break;
        case 27: _t->copySelectedCollisionObject(); break;
        case 28: _t->exportAsTextButtonClicked(); break;
        case 29: _t->importFromTextButtonClicked(); break;
        case 30: _t->saveSceneButtonClicked(); break;
        case 31: _t->planningSceneItemClicked(); break;
        case 32: _t->saveQueryButtonClicked(); break;
        case 33: _t->deleteSceneButtonClicked(); break;
        case 34: _t->deleteQueryButtonClicked(); break;
        case 35: _t->loadSceneButtonClicked(); break;
        case 36: _t->loadQueryButtonClicked(); break;
        case 37: _t->warehouseItemNameChanged((*reinterpret_cast< QTreeWidgetItem*(*)>(_a[1])),(*reinterpret_cast< int(*)>(_a[2]))); break;
        case 38: _t->loadStateButtonClicked(); break;
        case 39: _t->saveStartStateButtonClicked(); break;
        case 40: _t->saveGoalStateButtonClicked(); break;
        case 41: _t->removeStateButtonClicked(); break;
        case 42: _t->clearStatesButtonClicked(); break;
        case 43: _t->setAsStartStateButtonClicked(); break;
        case 44: _t->setAsGoalStateButtonClicked(); break;
        case 45: _t->detectObjectsButtonClicked(); break;
        case 46: _t->pickObjectButtonClicked(); break;
        case 47: _t->placeObjectButtonClicked(); break;
        case 48: _t->selectedDetectedObjectChanged(); break;
        case 49: _t->detectedObjectChanged((*reinterpret_cast< QListWidgetItem*(*)>(_a[1]))); break;
        case 50: _t->selectedSupportSurfaceChanged(); break;
        case 51: _t->tabChanged((*reinterpret_cast< int(*)>(_a[1]))); break;
        default: ;
        }
    } else if (_c == QMetaObject::IndexOfMethod) {
        int *result = reinterpret_cast<int *>(_a[0]);
        void **func = reinterpret_cast<void **>(_a[1]);
        {
            typedef void (MotionPlanningFrame::*_t)();
            if (*reinterpret_cast<_t *>(func) == static_cast<_t>(&MotionPlanningFrame::planningFinished)) {
                *result = 0;
            }
        }
    }
}

const QMetaObject moveit_rviz_plugin::MotionPlanningFrame::staticMetaObject = {
    { &QWidget::staticMetaObject, qt_meta_stringdata_moveit_rviz_plugin__MotionPlanningFrame.data,
      qt_meta_data_moveit_rviz_plugin__MotionPlanningFrame,  qt_static_metacall, Q_NULLPTR, Q_NULLPTR}
};


const QMetaObject *moveit_rviz_plugin::MotionPlanningFrame::metaObject() const
{
    return QObject::d_ptr->metaObject ? QObject::d_ptr->dynamicMetaObject() : &staticMetaObject;
}

void *moveit_rviz_plugin::MotionPlanningFrame::qt_metacast(const char *_clname)
{
    if (!_clname) return Q_NULLPTR;
    if (!strcmp(_clname, qt_meta_stringdata_moveit_rviz_plugin__MotionPlanningFrame.stringdata0))
        return static_cast<void*>(const_cast< MotionPlanningFrame*>(this));
    return QWidget::qt_metacast(_clname);
}

int moveit_rviz_plugin::MotionPlanningFrame::qt_metacall(QMetaObject::Call _c, int _id, void **_a)
{
    _id = QWidget::qt_metacall(_c, _id, _a);
    if (_id < 0)
        return _id;
    if (_c == QMetaObject::InvokeMetaMethod) {
        if (_id < 52)
            qt_static_metacall(this, _c, _id, _a);
        _id -= 52;
    } else if (_c == QMetaObject::RegisterMethodArgumentMetaType) {
        if (_id < 52)
            *reinterpret_cast<int*>(_a[0]) = -1;
        _id -= 52;
    }
    return _id;
}

// SIGNAL 0
void moveit_rviz_plugin::MotionPlanningFrame::planningFinished()
{
    QMetaObject::activate(this, &staticMetaObject, 0, Q_NULLPTR);
}
QT_END_MOC_NAMESPACE
