/********************************************************************************
** Form generated from reading UI file 'run_benchmark_dialog.ui'
**
** Created by: Qt User Interface Compiler version 5.5.1
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_RUN_BENCHMARK_DIALOG_H
#define UI_RUN_BENCHMARK_DIALOG_H

#include <QtCore/QVariant>
#include <QtWidgets/QAction>
#include <QtWidgets/QApplication>
#include <QtWidgets/QButtonGroup>
#include <QtWidgets/QCheckBox>
#include <QtWidgets/QDialog>
#include <QtWidgets/QFormLayout>
#include <QtWidgets/QHBoxLayout>
#include <QtWidgets/QHeaderView>
#include <QtWidgets/QLabel>
#include <QtWidgets/QLineEdit>
#include <QtWidgets/QPushButton>
#include <QtWidgets/QSpacerItem>
#include <QtWidgets/QSpinBox>
#include <QtWidgets/QVBoxLayout>

QT_BEGIN_NAMESPACE

class Ui_BenchmarkDialog
{
public:
    QVBoxLayout *verticalLayout;
    QFormLayout *formLayout;
    QLabel *label_4;
    QHBoxLayout *horizontalLayout;
    QLineEdit *benchmark_output_folder_text;
    QPushButton *benchmark_select_folder_button;
    QLabel *label;
    QLineEdit *benchmark_start_state_text;
    QLabel *label_5;
    QLineEdit *benchmark_goal_text;
    QLabel *label_6;
    QSpinBox *number_of_runs_spin;
    QLabel *label_7;
    QSpinBox *timeout_spin;
    QLabel *label_2;
    QCheckBox *benchmark_check_reachability_checkbox;
    QLabel *label_3;
    QCheckBox *benchmark_include_planners_checkbox;
    QLabel *planning_interfaces_label;
    QLabel *planning_algorithms_label;
    QLineEdit *planning_interfaces_text;
    QLineEdit *planning_algorithms_text;
    QSpacerItem *verticalSpacer;
    QHBoxLayout *horizontalLayout_2;
    QPushButton *save_config_button;
    QPushButton *run_benchmark_button;
    QPushButton *cancel_button;

    void setupUi(QDialog *BenchmarkDialog)
    {
        if (BenchmarkDialog->objectName().isEmpty())
            BenchmarkDialog->setObjectName(QStringLiteral("BenchmarkDialog"));
        BenchmarkDialog->resize(431, 400);
        verticalLayout = new QVBoxLayout(BenchmarkDialog);
        verticalLayout->setObjectName(QStringLiteral("verticalLayout"));
        formLayout = new QFormLayout();
        formLayout->setObjectName(QStringLiteral("formLayout"));
        formLayout->setFieldGrowthPolicy(QFormLayout::AllNonFixedFieldsGrow);
        label_4 = new QLabel(BenchmarkDialog);
        label_4->setObjectName(QStringLiteral("label_4"));

        formLayout->setWidget(0, QFormLayout::LabelRole, label_4);

        horizontalLayout = new QHBoxLayout();
        horizontalLayout->setObjectName(QStringLiteral("horizontalLayout"));
        benchmark_output_folder_text = new QLineEdit(BenchmarkDialog);
        benchmark_output_folder_text->setObjectName(QStringLiteral("benchmark_output_folder_text"));

        horizontalLayout->addWidget(benchmark_output_folder_text);

        benchmark_select_folder_button = new QPushButton(BenchmarkDialog);
        benchmark_select_folder_button->setObjectName(QStringLiteral("benchmark_select_folder_button"));
        QSizePolicy sizePolicy(QSizePolicy::Fixed, QSizePolicy::Fixed);
        sizePolicy.setHorizontalStretch(0);
        sizePolicy.setVerticalStretch(0);
        sizePolicy.setHeightForWidth(benchmark_select_folder_button->sizePolicy().hasHeightForWidth());
        benchmark_select_folder_button->setSizePolicy(sizePolicy);
        benchmark_select_folder_button->setMaximumSize(QSize(30, 30));

        horizontalLayout->addWidget(benchmark_select_folder_button);


        formLayout->setLayout(0, QFormLayout::FieldRole, horizontalLayout);

        label = new QLabel(BenchmarkDialog);
        label->setObjectName(QStringLiteral("label"));

        formLayout->setWidget(1, QFormLayout::LabelRole, label);

        benchmark_start_state_text = new QLineEdit(BenchmarkDialog);
        benchmark_start_state_text->setObjectName(QStringLiteral("benchmark_start_state_text"));

        formLayout->setWidget(1, QFormLayout::FieldRole, benchmark_start_state_text);

        label_5 = new QLabel(BenchmarkDialog);
        label_5->setObjectName(QStringLiteral("label_5"));

        formLayout->setWidget(2, QFormLayout::LabelRole, label_5);

        benchmark_goal_text = new QLineEdit(BenchmarkDialog);
        benchmark_goal_text->setObjectName(QStringLiteral("benchmark_goal_text"));

        formLayout->setWidget(2, QFormLayout::FieldRole, benchmark_goal_text);

        label_6 = new QLabel(BenchmarkDialog);
        label_6->setObjectName(QStringLiteral("label_6"));

        formLayout->setWidget(3, QFormLayout::LabelRole, label_6);

        number_of_runs_spin = new QSpinBox(BenchmarkDialog);
        number_of_runs_spin->setObjectName(QStringLiteral("number_of_runs_spin"));
        number_of_runs_spin->setMinimum(1);

        formLayout->setWidget(3, QFormLayout::FieldRole, number_of_runs_spin);

        label_7 = new QLabel(BenchmarkDialog);
        label_7->setObjectName(QStringLiteral("label_7"));

        formLayout->setWidget(4, QFormLayout::LabelRole, label_7);

        timeout_spin = new QSpinBox(BenchmarkDialog);
        timeout_spin->setObjectName(QStringLiteral("timeout_spin"));
        timeout_spin->setMinimum(1);
        timeout_spin->setMaximum(100000);

        formLayout->setWidget(4, QFormLayout::FieldRole, timeout_spin);

        label_2 = new QLabel(BenchmarkDialog);
        label_2->setObjectName(QStringLiteral("label_2"));

        formLayout->setWidget(5, QFormLayout::LabelRole, label_2);

        benchmark_check_reachability_checkbox = new QCheckBox(BenchmarkDialog);
        benchmark_check_reachability_checkbox->setObjectName(QStringLiteral("benchmark_check_reachability_checkbox"));

        formLayout->setWidget(5, QFormLayout::FieldRole, benchmark_check_reachability_checkbox);

        label_3 = new QLabel(BenchmarkDialog);
        label_3->setObjectName(QStringLiteral("label_3"));

        formLayout->setWidget(6, QFormLayout::LabelRole, label_3);

        benchmark_include_planners_checkbox = new QCheckBox(BenchmarkDialog);
        benchmark_include_planners_checkbox->setObjectName(QStringLiteral("benchmark_include_planners_checkbox"));

        formLayout->setWidget(6, QFormLayout::FieldRole, benchmark_include_planners_checkbox);

        planning_interfaces_label = new QLabel(BenchmarkDialog);
        planning_interfaces_label->setObjectName(QStringLiteral("planning_interfaces_label"));
        planning_interfaces_label->setEnabled(false);

        formLayout->setWidget(7, QFormLayout::LabelRole, planning_interfaces_label);

        planning_algorithms_label = new QLabel(BenchmarkDialog);
        planning_algorithms_label->setObjectName(QStringLiteral("planning_algorithms_label"));
        planning_algorithms_label->setEnabled(false);

        formLayout->setWidget(8, QFormLayout::LabelRole, planning_algorithms_label);

        planning_interfaces_text = new QLineEdit(BenchmarkDialog);
        planning_interfaces_text->setObjectName(QStringLiteral("planning_interfaces_text"));
        planning_interfaces_text->setEnabled(false);

        formLayout->setWidget(7, QFormLayout::FieldRole, planning_interfaces_text);

        planning_algorithms_text = new QLineEdit(BenchmarkDialog);
        planning_algorithms_text->setObjectName(QStringLiteral("planning_algorithms_text"));
        planning_algorithms_text->setEnabled(false);

        formLayout->setWidget(8, QFormLayout::FieldRole, planning_algorithms_text);


        verticalLayout->addLayout(formLayout);

        verticalSpacer = new QSpacerItem(20, 40, QSizePolicy::Minimum, QSizePolicy::Expanding);

        verticalLayout->addItem(verticalSpacer);

        horizontalLayout_2 = new QHBoxLayout();
        horizontalLayout_2->setObjectName(QStringLiteral("horizontalLayout_2"));
        save_config_button = new QPushButton(BenchmarkDialog);
        save_config_button->setObjectName(QStringLiteral("save_config_button"));

        horizontalLayout_2->addWidget(save_config_button);

        run_benchmark_button = new QPushButton(BenchmarkDialog);
        run_benchmark_button->setObjectName(QStringLiteral("run_benchmark_button"));

        horizontalLayout_2->addWidget(run_benchmark_button);

        cancel_button = new QPushButton(BenchmarkDialog);
        cancel_button->setObjectName(QStringLiteral("cancel_button"));

        horizontalLayout_2->addWidget(cancel_button);


        verticalLayout->addLayout(horizontalLayout_2);


        retranslateUi(BenchmarkDialog);

        QMetaObject::connectSlotsByName(BenchmarkDialog);
    } // setupUi

    void retranslateUi(QDialog *BenchmarkDialog)
    {
        BenchmarkDialog->setWindowTitle(QApplication::translate("BenchmarkDialog", "Run benchmark", 0));
        label_4->setText(QApplication::translate("BenchmarkDialog", "Output folder", 0));
        benchmark_select_folder_button->setText(QString());
        label->setText(QApplication::translate("BenchmarkDialog", "Start state regex", 0));
        label_5->setText(QApplication::translate("BenchmarkDialog", "Goal regex", 0));
        label_6->setText(QApplication::translate("BenchmarkDialog", "Number of runs", 0));
        label_7->setText(QApplication::translate("BenchmarkDialog", "Timeout per run\n"
"(seconds) ", 0));
        label_2->setText(QApplication::translate("BenchmarkDialog", "Check reachability", 0));
        benchmark_check_reachability_checkbox->setText(QString());
        label_3->setText(QApplication::translate("BenchmarkDialog", "Include planners", 0));
        benchmark_include_planners_checkbox->setText(QString());
        planning_interfaces_label->setText(QApplication::translate("BenchmarkDialog", "Planning interfaces", 0));
        planning_algorithms_label->setText(QApplication::translate("BenchmarkDialog", "Planning algorithms", 0));
        save_config_button->setText(QApplication::translate("BenchmarkDialog", "Just save config file", 0));
        run_benchmark_button->setText(QApplication::translate("BenchmarkDialog", "Run benchmark", 0));
        cancel_button->setText(QApplication::translate("BenchmarkDialog", "Cancel", 0));
    } // retranslateUi

};

namespace Ui {
    class BenchmarkDialog: public Ui_BenchmarkDialog {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_RUN_BENCHMARK_DIALOG_H
