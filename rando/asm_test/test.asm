section .data
        msg db 'Hello, world', 0xA; message and newline character
        len equ $ - msg ; calculate length of msg

section .text
        global _start ; Entrypoint for the program

_start:
        ;System call to write (sys_write)
        mov rax, 1 ; System call number for write (Linux x86-64)
        mov rdi, 1 ; File descriptor (1 = stdout)
        mov rsi, msg ; pointer to the message
        mov rdx, len ; Length of the message
        syscall ; call the kernel

        ;System call to exit (sys_exit)
        mov rax, 60 ; System call number for exit
        xor rdi, rdi; Exit status 0
        syscall ; Call the kernal







