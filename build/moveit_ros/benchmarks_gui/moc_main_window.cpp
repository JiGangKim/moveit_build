/****************************************************************************
** Meta object code from reading C++ file 'main_window.h'
**
** Created by: The Qt Meta Object Compiler version 67 (Qt 5.5.1)
**
** WARNING! All changes made in this file will be lost!
*****************************************************************************/

#include "../../../src/moveit_ros/benchmarks_gui/include/main_window.h"
#include <QtCore/qbytearray.h>
#include <QtCore/qmetatype.h>
#if !defined(Q_MOC_OUTPUT_REVISION)
#error "The header file 'main_window.h' doesn't include <QObject>."
#elif Q_MOC_OUTPUT_REVISION != 67
#error "This file was generated using the moc from 5.5.1. It"
#error "cannot be used with the include files from this version of Qt."
#error "(The moc has changed too much.)"
#endif

QT_BEGIN_MOC_NAMESPACE
struct qt_meta_stringdata_benchmark_tool__MainWindow_t {
    QByteArrayData data[63];
    char stringdata0[1456];
};
#define QT_MOC_LITERAL(idx, ofs, len) \
    Q_STATIC_BYTE_ARRAY_DATA_HEADER_INITIALIZER_WITH_OFFSET(len, \
    qptrdiff(offsetof(qt_meta_stringdata_benchmark_tool__MainWindow_t, stringdata0) + ofs \
        - idx * sizeof(QByteArrayData)) \
    )
static const qt_meta_stringdata_benchmark_tool__MainWindow_t qt_meta_stringdata_benchmark_tool__MainWindow = {
    {
QT_MOC_LITERAL(0, 0, 26), // "benchmark_tool::MainWindow"
QT_MOC_LITERAL(1, 27, 19), // "exitActionTriggered"
QT_MOC_LITERAL(2, 47, 0), // ""
QT_MOC_LITERAL(3, 48, 19), // "openActionTriggered"
QT_MOC_LITERAL(4, 68, 20), // "planningGroupChanged"
QT_MOC_LITERAL(5, 89, 4), // "text"
QT_MOC_LITERAL(6, 94, 22), // "dbConnectButtonClicked"
QT_MOC_LITERAL(7, 117, 35), // "dbConnectButtonClickedBackgro..."
QT_MOC_LITERAL(8, 153, 29), // "robotInteractionButtonClicked"
QT_MOC_LITERAL(9, 183, 22), // "loadSceneButtonClicked"
QT_MOC_LITERAL(10, 206, 16), // "QListWidgetItem*"
QT_MOC_LITERAL(11, 223, 4), // "item"
QT_MOC_LITERAL(12, 228, 16), // "goalPoseFeedback"
QT_MOC_LITERAL(13, 245, 46), // "visualization_msgs::Interacti..."
QT_MOC_LITERAL(14, 292, 8), // "feedback"
QT_MOC_LITERAL(15, 301, 16), // "createGoalAtPose"
QT_MOC_LITERAL(16, 318, 11), // "std::string"
QT_MOC_LITERAL(17, 330, 4), // "name"
QT_MOC_LITERAL(18, 335, 15), // "Eigen::Affine3d"
QT_MOC_LITERAL(19, 351, 4), // "pose"
QT_MOC_LITERAL(20, 356, 27), // "createGoalPoseButtonClicked"
QT_MOC_LITERAL(21, 384, 19), // "showBBoxGoalsDialog"
QT_MOC_LITERAL(22, 404, 28), // "createBBoxGoalsButtonClicked"
QT_MOC_LITERAL(23, 433, 32), // "removeSelectedGoalsButtonClicked"
QT_MOC_LITERAL(24, 466, 27), // "removeAllGoalsButtonClicked"
QT_MOC_LITERAL(25, 494, 24), // "goalPoseSelectionChanged"
QT_MOC_LITERAL(26, 519, 33), // "switchGoalVisibilityButtonCli..."
QT_MOC_LITERAL(27, 553, 21), // "goalPoseDoubleClicked"
QT_MOC_LITERAL(28, 575, 21), // "copySelectedGoalPoses"
QT_MOC_LITERAL(29, 597, 18), // "visibleAxisChanged"
QT_MOC_LITERAL(30, 616, 5), // "state"
QT_MOC_LITERAL(31, 622, 21), // "checkGoalsInCollision"
QT_MOC_LITERAL(32, 644, 19), // "checkGoalsReachable"
QT_MOC_LITERAL(33, 664, 12), // "runBenchmark"
QT_MOC_LITERAL(34, 677, 32), // "saveBenchmarkConfigButtonClicked"
QT_MOC_LITERAL(35, 710, 28), // "cancelBenchmarkButtonClicked"
QT_MOC_LITERAL(36, 739, 25), // "runBenchmarkButtonClicked"
QT_MOC_LITERAL(37, 765, 28), // "benchmarkFolderButtonClicked"
QT_MOC_LITERAL(38, 794, 20), // "loadBenchmarkResults"
QT_MOC_LITERAL(39, 815, 17), // "updateMarkerState"
QT_MOC_LITERAL(40, 833, 16), // "GripperMarkerPtr"
QT_MOC_LITERAL(41, 850, 6), // "marker"
QT_MOC_LITERAL(42, 857, 33), // "GripperMarker::GripperMarkerS..."
QT_MOC_LITERAL(43, 891, 29), // "updateGoalMarkerStateFromName"
QT_MOC_LITERAL(44, 921, 17), // "goalOffsetChanged"
QT_MOC_LITERAL(45, 939, 27), // "saveStartStateButtonClicked"
QT_MOC_LITERAL(46, 967, 33), // "removeSelectedStatesButtonCli..."
QT_MOC_LITERAL(47, 1001, 28), // "removeAllStatesButtonClicked"
QT_MOC_LITERAL(48, 1030, 27), // "startStateItemDoubleClicked"
QT_MOC_LITERAL(49, 1058, 28), // "loadGoalsFromDBButtonClicked"
QT_MOC_LITERAL(50, 1087, 26), // "saveGoalsOnDBButtonClicked"
QT_MOC_LITERAL(51, 1114, 28), // "deleteGoalsOnDBButtonClicked"
QT_MOC_LITERAL(52, 1143, 29), // "loadStatesFromDBButtonClicked"
QT_MOC_LITERAL(53, 1173, 27), // "saveStatesOnDBButtonClicked"
QT_MOC_LITERAL(54, 1201, 29), // "deleteStatesOnDBButtonClicked"
QT_MOC_LITERAL(55, 1231, 26), // "trajectorySelectionChanged"
QT_MOC_LITERAL(56, 1258, 29), // "createTrajectoryButtonClicked"
QT_MOC_LITERAL(57, 1288, 29), // "removeTrajectoryButtonClicked"
QT_MOC_LITERAL(58, 1318, 35), // "loadTrajectoriesFromDBButtonC..."
QT_MOC_LITERAL(59, 1354, 33), // "saveTrajectoriesOnDBButtonCli..."
QT_MOC_LITERAL(60, 1388, 27), // "trajectoryNWaypointsChanged"
QT_MOC_LITERAL(61, 1416, 30), // "trajectoryExecuteButtonClicked"
QT_MOC_LITERAL(62, 1447, 8) // "MainLoop"

    },
    "benchmark_tool::MainWindow\0"
    "exitActionTriggered\0\0openActionTriggered\0"
    "planningGroupChanged\0text\0"
    "dbConnectButtonClicked\0"
    "dbConnectButtonClickedBackgroundJob\0"
    "robotInteractionButtonClicked\0"
    "loadSceneButtonClicked\0QListWidgetItem*\0"
    "item\0goalPoseFeedback\0"
    "visualization_msgs::InteractiveMarkerFeedback&\0"
    "feedback\0createGoalAtPose\0std::string\0"
    "name\0Eigen::Affine3d\0pose\0"
    "createGoalPoseButtonClicked\0"
    "showBBoxGoalsDialog\0createBBoxGoalsButtonClicked\0"
    "removeSelectedGoalsButtonClicked\0"
    "removeAllGoalsButtonClicked\0"
    "goalPoseSelectionChanged\0"
    "switchGoalVisibilityButtonClicked\0"
    "goalPoseDoubleClicked\0copySelectedGoalPoses\0"
    "visibleAxisChanged\0state\0checkGoalsInCollision\0"
    "checkGoalsReachable\0runBenchmark\0"
    "saveBenchmarkConfigButtonClicked\0"
    "cancelBenchmarkButtonClicked\0"
    "runBenchmarkButtonClicked\0"
    "benchmarkFolderButtonClicked\0"
    "loadBenchmarkResults\0updateMarkerState\0"
    "GripperMarkerPtr\0marker\0"
    "GripperMarker::GripperMarkerState\0"
    "updateGoalMarkerStateFromName\0"
    "goalOffsetChanged\0saveStartStateButtonClicked\0"
    "removeSelectedStatesButtonClicked\0"
    "removeAllStatesButtonClicked\0"
    "startStateItemDoubleClicked\0"
    "loadGoalsFromDBButtonClicked\0"
    "saveGoalsOnDBButtonClicked\0"
    "deleteGoalsOnDBButtonClicked\0"
    "loadStatesFromDBButtonClicked\0"
    "saveStatesOnDBButtonClicked\0"
    "deleteStatesOnDBButtonClicked\0"
    "trajectorySelectionChanged\0"
    "createTrajectoryButtonClicked\0"
    "removeTrajectoryButtonClicked\0"
    "loadTrajectoriesFromDBButtonClicked\0"
    "saveTrajectoriesOnDBButtonClicked\0"
    "trajectoryNWaypointsChanged\0"
    "trajectoryExecuteButtonClicked\0MainLoop"
};
#undef QT_MOC_LITERAL

static const uint qt_meta_data_benchmark_tool__MainWindow[] = {

 // content:
       7,       // revision
       0,       // classname
       0,    0, // classinfo
      49,   14, // methods
       0,    0, // properties
       0,    0, // enums/sets
       0,    0, // constructors
       0,       // flags
       0,       // signalCount

 // slots: name, argc, parameters, tag, flags
       1,    1,  259,    2, 0x0a /* Public */,
       3,    1,  262,    2, 0x0a /* Public */,
       4,    1,  265,    2, 0x0a /* Public */,
       6,    0,  268,    2, 0x0a /* Public */,
       7,    0,  269,    2, 0x0a /* Public */,
       8,    0,  270,    2, 0x0a /* Public */,
       9,    0,  271,    2, 0x0a /* Public */,
       9,    1,  272,    2, 0x0a /* Public */,
      12,    1,  275,    2, 0x0a /* Public */,
      15,    2,  278,    2, 0x0a /* Public */,
      20,    0,  283,    2, 0x0a /* Public */,
      21,    0,  284,    2, 0x0a /* Public */,
      22,    0,  285,    2, 0x0a /* Public */,
      23,    0,  286,    2, 0x0a /* Public */,
      24,    0,  287,    2, 0x0a /* Public */,
      25,    0,  288,    2, 0x0a /* Public */,
      26,    0,  289,    2, 0x0a /* Public */,
      27,    1,  290,    2, 0x0a /* Public */,
      28,    0,  293,    2, 0x0a /* Public */,
      29,    1,  294,    2, 0x0a /* Public */,
      31,    0,  297,    2, 0x0a /* Public */,
      32,    0,  298,    2, 0x0a /* Public */,
      33,    0,  299,    2, 0x0a /* Public */,
      34,    0,  300,    2, 0x0a /* Public */,
      35,    0,  301,    2, 0x0a /* Public */,
      36,    0,  302,    2, 0x0a /* Public */,
      37,    0,  303,    2, 0x0a /* Public */,
      38,    0,  304,    2, 0x0a /* Public */,
      39,    2,  305,    2, 0x0a /* Public */,
      43,    2,  310,    2, 0x0a /* Public */,
      44,    0,  315,    2, 0x0a /* Public */,
      45,    0,  316,    2, 0x0a /* Public */,
      46,    0,  317,    2, 0x0a /* Public */,
      47,    0,  318,    2, 0x0a /* Public */,
      48,    1,  319,    2, 0x0a /* Public */,
      49,    0,  322,    2, 0x0a /* Public */,
      50,    0,  323,    2, 0x0a /* Public */,
      51,    0,  324,    2, 0x0a /* Public */,
      52,    0,  325,    2, 0x0a /* Public */,
      53,    0,  326,    2, 0x0a /* Public */,
      54,    0,  327,    2, 0x0a /* Public */,
      55,    0,  328,    2, 0x0a /* Public */,
      56,    0,  329,    2, 0x0a /* Public */,
      57,    0,  330,    2, 0x0a /* Public */,
      58,    0,  331,    2, 0x0a /* Public */,
      59,    0,  332,    2, 0x0a /* Public */,
      60,    1,  333,    2, 0x0a /* Public */,
      61,    0,  336,    2, 0x0a /* Public */,
      62,    0,  337,    2, 0x0a /* Public */,

 // slots: parameters
    QMetaType::Void, QMetaType::Bool,    2,
    QMetaType::Void, QMetaType::Bool,    2,
    QMetaType::Void, QMetaType::QString,    5,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void, 0x80000000 | 10,   11,
    QMetaType::Void, 0x80000000 | 13,   14,
    QMetaType::Void, 0x80000000 | 16, 0x80000000 | 18,   17,   19,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void, 0x80000000 | 10,   11,
    QMetaType::Void,
    QMetaType::Void, QMetaType::Int,   30,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Bool,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void, 0x80000000 | 40, 0x80000000 | 42,   41,   30,
    QMetaType::Void, 0x80000000 | 16, 0x80000000 | 42,   17,   30,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void, 0x80000000 | 10,   11,
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
    QMetaType::Void, QMetaType::Int,    2,
    QMetaType::Void,
    QMetaType::Void,

       0        // eod
};

void benchmark_tool::MainWindow::qt_static_metacall(QObject *_o, QMetaObject::Call _c, int _id, void **_a)
{
    if (_c == QMetaObject::InvokeMetaMethod) {
        MainWindow *_t = static_cast<MainWindow *>(_o);
        Q_UNUSED(_t)
        switch (_id) {
        case 0: _t->exitActionTriggered((*reinterpret_cast< bool(*)>(_a[1]))); break;
        case 1: _t->openActionTriggered((*reinterpret_cast< bool(*)>(_a[1]))); break;
        case 2: _t->planningGroupChanged((*reinterpret_cast< const QString(*)>(_a[1]))); break;
        case 3: _t->dbConnectButtonClicked(); break;
        case 4: _t->dbConnectButtonClickedBackgroundJob(); break;
        case 5: _t->robotInteractionButtonClicked(); break;
        case 6: _t->loadSceneButtonClicked(); break;
        case 7: _t->loadSceneButtonClicked((*reinterpret_cast< QListWidgetItem*(*)>(_a[1]))); break;
        case 8: _t->goalPoseFeedback((*reinterpret_cast< visualization_msgs::InteractiveMarkerFeedback(*)>(_a[1]))); break;
        case 9: _t->createGoalAtPose((*reinterpret_cast< const std::string(*)>(_a[1])),(*reinterpret_cast< const Eigen::Affine3d(*)>(_a[2]))); break;
        case 10: _t->createGoalPoseButtonClicked(); break;
        case 11: _t->showBBoxGoalsDialog(); break;
        case 12: _t->createBBoxGoalsButtonClicked(); break;
        case 13: _t->removeSelectedGoalsButtonClicked(); break;
        case 14: _t->removeAllGoalsButtonClicked(); break;
        case 15: _t->goalPoseSelectionChanged(); break;
        case 16: _t->switchGoalVisibilityButtonClicked(); break;
        case 17: _t->goalPoseDoubleClicked((*reinterpret_cast< QListWidgetItem*(*)>(_a[1]))); break;
        case 18: _t->copySelectedGoalPoses(); break;
        case 19: _t->visibleAxisChanged((*reinterpret_cast< int(*)>(_a[1]))); break;
        case 20: _t->checkGoalsInCollision(); break;
        case 21: _t->checkGoalsReachable(); break;
        case 22: _t->runBenchmark(); break;
        case 23: { bool _r = _t->saveBenchmarkConfigButtonClicked();
            if (_a[0]) *reinterpret_cast< bool*>(_a[0]) = _r; }  break;
        case 24: _t->cancelBenchmarkButtonClicked(); break;
        case 25: _t->runBenchmarkButtonClicked(); break;
        case 26: _t->benchmarkFolderButtonClicked(); break;
        case 27: _t->loadBenchmarkResults(); break;
        case 28: _t->updateMarkerState((*reinterpret_cast< GripperMarkerPtr(*)>(_a[1])),(*reinterpret_cast< const GripperMarker::GripperMarkerState(*)>(_a[2]))); break;
        case 29: _t->updateGoalMarkerStateFromName((*reinterpret_cast< const std::string(*)>(_a[1])),(*reinterpret_cast< const GripperMarker::GripperMarkerState(*)>(_a[2]))); break;
        case 30: _t->goalOffsetChanged(); break;
        case 31: _t->saveStartStateButtonClicked(); break;
        case 32: _t->removeSelectedStatesButtonClicked(); break;
        case 33: _t->removeAllStatesButtonClicked(); break;
        case 34: _t->startStateItemDoubleClicked((*reinterpret_cast< QListWidgetItem*(*)>(_a[1]))); break;
        case 35: _t->loadGoalsFromDBButtonClicked(); break;
        case 36: _t->saveGoalsOnDBButtonClicked(); break;
        case 37: _t->deleteGoalsOnDBButtonClicked(); break;
        case 38: _t->loadStatesFromDBButtonClicked(); break;
        case 39: _t->saveStatesOnDBButtonClicked(); break;
        case 40: _t->deleteStatesOnDBButtonClicked(); break;
        case 41: _t->trajectorySelectionChanged(); break;
        case 42: _t->createTrajectoryButtonClicked(); break;
        case 43: _t->removeTrajectoryButtonClicked(); break;
        case 44: _t->loadTrajectoriesFromDBButtonClicked(); break;
        case 45: _t->saveTrajectoriesOnDBButtonClicked(); break;
        case 46: _t->trajectoryNWaypointsChanged((*reinterpret_cast< int(*)>(_a[1]))); break;
        case 47: _t->trajectoryExecuteButtonClicked(); break;
        case 48: _t->MainLoop(); break;
        default: ;
        }
    }
}

const QMetaObject benchmark_tool::MainWindow::staticMetaObject = {
    { &QMainWindow::staticMetaObject, qt_meta_stringdata_benchmark_tool__MainWindow.data,
      qt_meta_data_benchmark_tool__MainWindow,  qt_static_metacall, Q_NULLPTR, Q_NULLPTR}
};


const QMetaObject *benchmark_tool::MainWindow::metaObject() const
{
    return QObject::d_ptr->metaObject ? QObject::d_ptr->dynamicMetaObject() : &staticMetaObject;
}

void *benchmark_tool::MainWindow::qt_metacast(const char *_clname)
{
    if (!_clname) return Q_NULLPTR;
    if (!strcmp(_clname, qt_meta_stringdata_benchmark_tool__MainWindow.stringdata0))
        return static_cast<void*>(const_cast< MainWindow*>(this));
    return QMainWindow::qt_metacast(_clname);
}

int benchmark_tool::MainWindow::qt_metacall(QMetaObject::Call _c, int _id, void **_a)
{
    _id = QMainWindow::qt_metacall(_c, _id, _a);
    if (_id < 0)
        return _id;
    if (_c == QMetaObject::InvokeMetaMethod) {
        if (_id < 49)
            qt_static_metacall(this, _c, _id, _a);
        _id -= 49;
    } else if (_c == QMetaObject::RegisterMethodArgumentMetaType) {
        if (_id < 49)
            *reinterpret_cast<int*>(_a[0]) = -1;
        _id -= 49;
    }
    return _id;
}
QT_END_MOC_NAMESPACE
