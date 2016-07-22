/********************************************************************************
** Form generated from reading UI file 'robot_loader.ui'
**
** Created by: Qt User Interface Compiler version 5.5.1
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_ROBOT_LOADER_H
#define UI_ROBOT_LOADER_H

#include <QtCore/QVariant>
#include <QtWidgets/QAction>
#include <QtWidgets/QApplication>
#include <QtWidgets/QButtonGroup>
#include <QtWidgets/QDialog>
#include <QtWidgets/QHeaderView>
#include <QtWidgets/QLabel>
#include <QtWidgets/QProgressBar>
#include <QtWidgets/QVBoxLayout>

QT_BEGIN_NAMESPACE

class Ui_RobotLoader
{
public:
    QVBoxLayout *verticalLayout;
    QLabel *status_label;
    QProgressBar *load_progress_bar;

    void setupUi(QDialog *RobotLoader)
    {
        if (RobotLoader->objectName().isEmpty())
            RobotLoader->setObjectName(QStringLiteral("RobotLoader"));
        RobotLoader->resize(414, 91);
        verticalLayout = new QVBoxLayout(RobotLoader);
        verticalLayout->setObjectName(QStringLiteral("verticalLayout"));
        status_label = new QLabel(RobotLoader);
        status_label->setObjectName(QStringLiteral("status_label"));

        verticalLayout->addWidget(status_label);

        load_progress_bar = new QProgressBar(RobotLoader);
        load_progress_bar->setObjectName(QStringLiteral("load_progress_bar"));
        load_progress_bar->setValue(0);

        verticalLayout->addWidget(load_progress_bar);


        retranslateUi(RobotLoader);

        QMetaObject::connectSlotsByName(RobotLoader);
    } // setupUi

    void retranslateUi(QDialog *RobotLoader)
    {
        RobotLoader->setWindowTitle(QApplication::translate("RobotLoader", "Robot loader", 0));
        status_label->setText(QString());
    } // retranslateUi

};

namespace Ui {
    class RobotLoader: public Ui_RobotLoader {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_ROBOT_LOADER_H
