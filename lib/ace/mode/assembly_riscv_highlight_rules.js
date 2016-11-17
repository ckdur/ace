/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2012, Ajax.org B.V.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */

/* This file was created by CKDUR based on assembly_X86 */
/****************************************************************************************
 * IT MIGHT NOT BE PERFECT ...But it's a good start from an existing *.tmlanguage file. *
 * fileTypes                                                                            *
 ****************************************************************************************/
 
define(function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

var AssemblyRISCVHighlightRules = function() {
    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used

    this.$rules = { start:   
       [ { token: 'keyword.control.assembly',
           regex: '\\b(?:'+
            // RV32I
            'lui|auipc|jal|jalr|beq|bne|blt|bge|bltu|bgeu|lb|lh|lw|'+
            'lbu|lhu|sb|sh|sw|addi|slti|sltiu|xori|ori|andi|slli|srli|'+
            'srai|add|sub|sll|slt|sltu|xor|srl|sra|or|and|fence|fence\\.i|'+
            'ecall|ebreak|csrrw|csrrs|csrrc|csrrwi|csrrsi|csrrci|'+
            // RV64I
            'lwu|ld|sd|addiw|slliw|srliw|sraiw|addw|subw|sllw|srlw|sraw|'+
            // RV32M
            'mul|mulh|mulhu|mulhsu|div|divu|rem|remu|'+
            // RV64M
            'mulw|divw|divuw|remw|remuw|'+
            // RV32A
            'lr\\.w|sc\\.w|amoswap\\.w|amoadd\\.w|amoxor\\.w|amoand\\.w|amoor\\.w|amomin\\.w|amomax\\.w|amominu\\.w|amomaxu\\.w|'+
            // RV64A
            'lr\\.d|sc\\.d|amoswap\\.d|amoadd\\.d|amoxor\\.d|amoand\\.d|amoor\\.d|amomin\\.d|amomax\\.d|amominu\\.d|amomaxu\\.d|'+
            // RV32F
            'flw|fsw|fmadd\\.s|fmsub\\.s|fnmsub\\.s|fnmadd\\.s|fadd\\.s|fsub\\.s|fmul\\.s|fdiv\\.s|fsqrt\\.s|fsgnj\\.s|fsgnjn\\.s|'+
            'fsgnjx\\.s|fmin\\.s|fmax\\.s|fcvt\\.w\\.s|fcvt\\.wu\\.s|fmv\\.x\\.s|feq\\.s|flt\\.s|fle\\.s|fclass\\.s|fcvt\\.s\\.w|fcvt\\.s\\.wu|fmv\\.s\\.x|'+
            // RV64F
            'fcvt\\.l\\.s|fcvt\\.lu\\.s|fcvy\\.s\\.l|fcvt\\.s\\.lu|'+
            // RV32D
            'fld|fsd|fmadd\\.d|fmsub\\.d|fnmsub\\.d|fnmadd\\.d|fadd\\.d|fsub\\.d|fmul\\.d|fdiv\\.d|fsqrt\\.d|fsgnj\\.d|fsgnjn\\.d|'+
            'fsgnjx\\.d|fmin\\.d|fmax\\.d|fcvt\\.s\\.d|fcvt\\.d\\.s|feq\\.d|flt\\.d|fle\\.d|fclass\\.d|fcvt\\.w\\.d|fcvt\\.wu\\.d|fcvt\\.d\\.w|fcvt\\.d\\.wu|'+
            // RV64D
            'fcvt\\.l\\.d|fcvt\\.lu\\.d|fmv\\.x\\.d|fcvt\\.d\\.l|fcvt\\.d\\.lu|fmv\\.d\\.x|'+
            // RV32C
            'c\\.addi4spn|c\\.fld|c\\.lq|c\\.lw|c\\.flw|c\\.ld|c\\.fsd|c\\.sq|c\\.sw|c\\.fsw|c\\.sd|c\\.nop|c\\.addi|c\\.jal|c\\.addiw|c\\.li|'+
            'c\\.addi16sp|c\\.lui|c\\.srli|c\\.srli64|c\\.srai|c\\.srai64|c\\.andi|c\\.sub|c\\.xor|c\\.or|c\\.and|c\\.subw|c\\.addw|c\\.j|'+
            'c\\.beqz|c\\.bnez|c\\.slli|c\\.slli64|c\\.fldsp|c\\.lqsp|c\\.lwsp|c\\.flwsp|c\\.ldsp|c\\.jr|c\\.mv|c\\.ebreak|c\\.jalr|c\\.add|'+
            'c\\.fsdsp|c\\.sqsp|c\\.fswsp|c\\.sdsp|'+
            // picorv32 IRQ
            'getq|setq|retirq|maskirq|waitirq|timer|'+
            // RV32 alias
            'la|nop|li|mv|not|neg|negw|sext\\.w|seqz|snez|sltz|sgtz|fmv\\.s|fabs\\.s|fneg\\.s|fmv\\.d|fabs\\.d|fneg\\.d|'+
            'beqz|bnez|blez|bgez|bltz|bgtz|j|jr|ret|call|tail|rdtimer|rdtimerh|rdcycle|rdcycleh|rdinstr|rdinstrh'+
                  ')\\b',
           caseInsensitive: true },
         { token: 'variable.parameter.register.assembly',
           regex: '\\b(?:'+
                  // Integer registers
                'x0|x1|x2|x3|x4|x5|x6|x7|x8|x9|x10|x11|x12|x13|x14|x15|'+ // Common names
                'x16|x17|x18|x19|x20|x21|x22|x23|x24|x25|x26|x27|x28|x29|x30|x31|'+
                'pc|zero|ra|sp|gp|tp|fp|'+ // typical with other names
                's0|s1|s2|s3|s4|s5|s6|s7|s8|s9|s10|s11|'+ // save registers
                't0|t1|t2|t3|t4|t5|t6|'+ // temp registers
                'a0|a1|a2|a3|a4|a5|a6|a7|'+ // arg registers
                // fp registers
                'f0|f1|f2|f3|f4|f5|f6|f7|f8|f9|f10|f11|f12|f13|f14|f15|'+ // Common names
                'f16|f17|f18|f19|f20|f21|f22|f23|f24|f25|f26|f27|f28|f29|f30|f31|'+
                'fs0|fs1|fs2|fs3|fs4|fs5|fs6|fs7|fs8|fs9|fs10|fs11|'+ // save registers
                'ft0|ft1|ft2|ft3|ft4|ft5|ft6|ft7|ft8|ft9|ft10|ft11|'+ // temp registers
                'fa0|fa1|fa2|fa3|fa4|fa5|fa6|fa7'+ // arg registers
                  ')\\b',
           caseInsensitive: true },
         { token: 'constant.character.decimal.assembly',
           regex: '\\b[0-9]+\\b' },
         { token: 'constant.character.hexadecimal.assembly',
           regex: '\\b0x[A-F0-9]+\\b',
           caseInsensitive: true },
         { token: 'constant.character.hexadecimal.assembly',
           regex: '\\b[A-F0-9]+h\\b',
           caseInsensitive: true },
         { token: 'string.assembly', regex: /'([^\\']|\\.)*'/ },
         { token: 'string.assembly', regex: /"([^\\"]|\\.)*"/ },
         { token: 'support.function.directive.assembly',
           regex: '^\\[',
           push: 
            [ { token: 'support.function.directive.assembly',
                regex: '\\]$',
                next: 'pop' },
              { defaultToken: 'support.function.directive.assembly' } ] },
         { token: 
            [ 'support.function.directive.assembly',
              'support.function.directive.assembly',
              'entity.name.function.assembly' ],
           regex: '(^struc)( )([_a-zA-Z][_a-zA-Z0-9]*)' },
         { token: 'support.function.directive.assembly',
           regex: '^endstruc\\b' },
        { token: 
            [ 'support.function.directive.assembly',
              'entity.name.function.assembly',
              'support.function.directive.assembly',
              'constant.character.assembly' ],
           regex: '^(%macro )([_a-zA-Z][_a-zA-Z0-9]*)( )([0-9]+)' },
         { token: 'support.function.directive.assembly',
           regex: '^%endmacro' },
         { token: 
            [ 'text',
              'support.function.directive.assembly',
              'text',
              'entity.name.function.assembly' ],
           regex: '(\\s*)(%define|%xdefine|%idefine|%undef|%assign|%defstr|%strcat|%strlen|%substr|%00|%0|%rotate|%rep|%endrep|%include|\\$\\$|\\$|%unmacro|%if|%elif|%else|%endif|%(?:el)?ifdef|%(?:el)?ifmacro|%(?:el)?ifctx|%(?:el)?ifidn|%(?:el)?ifidni|%(?:el)?ifid|%(?:el)?ifnum|%(?:el)?ifstr|%(?:el)?iftoken|%(?:el)?ifempty|%(?:el)?ifenv|%pathsearch|%depend|%use|%push|%pop|%repl|%arg|%stacksize|%local|%error|%warning|%fatal|%line|%!|%comment|%endcomment|__NASM_VERSION_ID__|__NASM_VER__|__FILE__|__LINE__|__BITS__|__OUTPUT_FORMAT__|__DATE__|__TIME__|__DATE_NUM__|_TIME__NUM__|__UTC_DATE__|__UTC_TIME__|__UTC_DATE_NUM__|__UTC_TIME_NUM__|__POSIX_TIME__|__PASS__|ISTRUC|AT|IEND|BITS 16|BITS 32|BITS 64|USE16|USE32|__SECT__|ABSOLUTE|EXTERN|GLOBAL|COMMON|CPU|FLOAT)\\b( ?)((?:[_a-zA-Z][_a-zA-Z0-9]*)?)',
           caseInsensitive: true },
          { token: 'support.function.directive.assembly',
           regex: '\\b(?:d[bwdqtoy]|res[bwdqto]|equ|times|align|alignb|sectalign|section|ptr|byte|word|dword|qword|incbin)\\b',
           caseInsensitive: true },
         { token: 'entity.name.function.assembly', regex: '^\\s*%%[\\w.]+?:$' },
         { token: 'entity.name.function.assembly', regex: '^\\s*%\\$[\\w.]+?:$' },
         { token: 'entity.name.function.assembly', regex: '^[\\w.]+?:' },
         { token: 'entity.name.function.assembly', regex: '^[\\w.]+?\\b' },
         { token: 'comment.assembly', regex: '#.*$' } ] 
    }
    
    this.normalizeRules();
};

AssemblyRISCVHighlightRules.metaData = { fileTypes: [ 'riscvasm' ],
      name: 'Assembly RISC-V',
      scopeName: 'source.assembly' }


oop.inherits(AssemblyRISCVHighlightRules, TextHighlightRules);

exports.AssemblyRISCVHighlightRules = AssemblyRISCVHighlightRules;
});