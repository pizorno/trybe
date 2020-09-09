#!/bin/bash

ARQ=$1
if [ -e "$ARQ" ]
    then 
        echo "O caminho $ARQ está habilitado!"
fi
if [ -w $ARQ ]
    then
        echo "Você tem permissão para editar $ARQ"
    else
        echo "Você não tem permissão para editar $ARQ"
fi