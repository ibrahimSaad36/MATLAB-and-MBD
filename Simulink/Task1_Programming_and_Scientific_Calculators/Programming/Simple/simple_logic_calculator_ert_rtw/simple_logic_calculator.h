/*
 * File: simple_logic_calculator.h
 *
 * Code generated for Simulink model 'simple_logic_calculator'.
 *
 * Model version                  : 1.12
 * Simulink Coder version         : 8.13 (R2017b) 24-Jul-2017
 * C/C++ source code generated on : Sat Dec 31 15:07:54 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 *    3. ROM efficiency
 * Validation result: Not run
 */

#ifndef RTW_HEADER_simple_logic_calculator_h_
#define RTW_HEADER_simple_logic_calculator_h_
#include <string.h>
#include <stddef.h>
#ifndef simple_logic_calculator_COMMON_INCLUDES_
# define simple_logic_calculator_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* simple_logic_calculator_COMMON_INCLUDES_ */

#include "simple_logic_calculator_types.h"

/* Macros for accessing real-time model data structure */
#ifndef rtmGetErrorStatus
# define rtmGetErrorStatus(rtm)        ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
# define rtmSetErrorStatus(rtm, val)   ((rtm)->errorStatus = (val))
#endif

/* External inputs (root inport signals with auto storage) */
typedef struct {
  boolean_T Operand1;                  /* '<Root>/Operand1' */
  boolean_T Operand2;                  /* '<Root>/Operand2' */
} ExtU_simple_logic_calculator_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  boolean_T AND;                       /* '<Root>/AND' */
  boolean_T OR;                        /* '<Root>/OR' */
  boolean_T XOR;                       /* '<Root>/XOR' */
  boolean_T NOT1;                      /* '<Root>/NOT 1' */
  boolean_T NOT2;                      /* '<Root>/NOT 2' */
  boolean_T XNOR;                      /* '<Root>/XNOR' */
  boolean_T NOR;                       /* '<Root>/NOR' */
  boolean_T NAND;                      /* '<Root>/NAND' */
} ExtY_simple_logic_calculator_T;

/* Real-time Model Data Structure */
struct tag_RTM_simple_logic_calculat_T {
  const char_T * volatile errorStatus;
};

/* External inputs (root inport signals with auto storage) */
extern ExtU_simple_logic_calculator_T simple_logic_calculator_U;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_simple_logic_calculator_T simple_logic_calculator_Y;

/* Model entry point functions */
extern void simple_logic_calculator_initialize(void);
extern void simple_logic_calculator_step(void);
extern void simple_logic_calculator_terminate(void);

/* Real-time Model object */
extern RT_MODEL_simple_logic_calcula_T *const simple_logic_calculator_M;

/*-
 * The generated code includes comments that allow you to trace directly
 * back to the appropriate location in the model.  The basic format
 * is <system>/block_name, where system is the system number (uniquely
 * assigned by Simulink) and block_name is the name of the block.
 *
 * Use the MATLAB hilite_system command to trace the generated code back
 * to the model.  For example,
 *
 * hilite_system('<S3>')    - opens system 3
 * hilite_system('<S3>/Kp') - opens and selects block Kp which resides in S3
 *
 * Here is the system hierarchy for this model
 *
 * '<Root>' : 'simple_logic_calculator'
 */
#endif                                 /* RTW_HEADER_simple_logic_calculator_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
