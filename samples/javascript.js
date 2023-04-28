// Load
Cdr.Load.Empresa = {
    patata: "monalisa",

    getData: function () {
        var patata = "jaerla";
        return this.data;
    },

    getStoreEmpresa: function () {
        return this.storeEmpresa;
    },

    getStoreEmpresaGenerica: function () {
        return this.storeEmpresaGenerica;
    },

    getStoreEstadoRegistrado: function () {
        return this.storeEstadoRegistrado;
    },

    getForm: function () {
        return this.form;
    },

    // Inicializacion de los datos
    ini: function (data) {
        Cdr.Gestion.Modulo.setModulo("empresa");
        this.data = Cdr.Data.empresa = data;
        this.store = Cdr.Data.empresa;
        this.storeEmpresa = Cdr.Data.empresa;
        this.storeEmpresaGenerica = Cdr.Data.empresa.empresaRegistradaGenerica;
        this.storeEstadoRegistrado = Cdr.Data.empresa.estadosRegistrado;

        return this;
    },

    // Inicializacion de los datos
    detalle: function () {
        this.form = "formEmpresaDetalle";
        Cdr.Gestion.Util.showMask(Ext.getBody(), "Cargando la empresa...");
        Cdr.View.Empresa.ini();
        Cdr.View.Empresa.detalle();
        Cdr.View.Empresa.end();
        Cdr.Gestion.Util.hideMask();
    },

    // Inicializacion de los datos
    listado: function () {
        this.form = "formEmpresaListado";
        Cdr.Gestion.Util.showMask(
            Ext.getBody(),
            "Cargando el listado de empresas..."
        );
        Cdr.View.Empresa.ini();
        Cdr.View.Empresa.listado();
        Cdr.View.Empresa.end();
        Cdr.Gestion.Util.hideMask();
    },

    // Inicializacion de los datos
    iniBuscador: function (data) {
        Cdr.Gestion.Modulo.setModulo("empresa");
        this.data = Cdr.Data.empresa = data;
    },

    // Inicializacion de los datos
    buscador: function () {
        this.form = "formEmpresaBusqueda";
        Cdr.Gestion.Util.showMask(
            Ext.getBody(),
            "Cargando el buscador de empresas..."
        );
        Cdr.View.Empresa.ini();
        Cdr.View.Empresa.buscador();
        Cdr.View.Empresa.end();
        Cdr.Gestion.Util.hideMask();
    },

    // Recupera columna
    loadColumna1: function () {
        if (this.data) {
            // empresa_registrado_generico
            this.nombre_empresa = this.data.empresaRegistradaGenerica.nombre_empresa;
            this.direccion_empresa =
                this.data.empresaRegistradaGenerica.direccion_empresa;
            this.empresa_id = this.data.empresaRegistradaGenerica.empresa_id;
            this.codigo_empresa_antiguo =
                this.data.empresaRegistradaGenerica.codigo_empresa_antiguo;
            this.codigo_postal_empresa =
                this.data.empresaRegistradaGenerica.codigo_postal_empresa;
            this.fecha_alta = Cdr.Gestion.Util.stringToDateTime(
                this.data.empresaRegistradaGenerica.fecha_alta
            );
            this.pais_empresa_iso =
                this.data.empresaRegistradaGenerica.pais_empresa_iso;
            this.pais_empresa_iso_txt =
                this.data.empresaRegistradaGenerica.pais_empresa_iso_txt;
            this.poblacion_empresa =
                this.data.empresaRegistradaGenerica.poblacion_empresa;
            this.provincia_empresa =
                this.data.empresaRegistradaGenerica.provincia_empresa;
            this.mail = this.data.empresaRegistradaGenerica.mail;
            this.telefono = this.data.empresaRegistradaGenerica.telefono;
            this.telefono2 = this.data.empresaRegistradaGenerica.telefono2;
            this.empresa_registrado_generico_id =
                this.data.empresaRegistradaGenerica.empresa_registrado_generico_id;
            this.cif = this.data.empresaRegistradaGenerica.cif;
            if (this.data.empresaRegistradaGenerica.es_agencia) {
                this.es_agencia = parseInt(
                    this.data.empresaRegistradaGenerica.es_agencia
                );
            } else {
                this.es_agencia = 0;
            }
            this.nombre_logo = this.data.empresaRegistradaGenerica.nombre_logo;
            this.incremento_neto =
                this.data.empresaRegistradaGenerica.incremento_neto;
            this.comision_pd = this.data.empresaRegistradaGenerica.comision_pd;
            this.incremento_pvp_cf =
                this.data.empresaRegistradaGenerica.incremento_pvp_cf;
            this.portal_id = this.data.empresaRegistradaGenerica.portal_id;

            // empresa_registrada
            this.id = this.data.id;
            this.enviar_factura = parseInt(this.data.enviar_factura);
            this.nombre_razon_social = this.data.razon_social;
            this.direccion_razon_social = this.data.direccion_razon_social;
            this.codigo_postal_razon_social = this.data.codigo_postal_razon_social;
            this.pais_razon_social_iso = this.data.pais_razon_social_iso;
            this.poblacion_razon_social = this.data.poblacion_razon_social;
            this.provincia_razon_social = this.data.provincia_razon_social;
            this.sector = this.data.sector;
            this.autonomo = parseInt(this.data.autonomo);
            this.pago_no_securizado = parseInt(this.data.pago_no_securizado);
            this.regimen_facturacion = this.data.regimen_facturacion
                ? this.data.regimen_facturacion
                : "G";

            // estado_registrado
            this.usuario_activo_fecha = Cdr.Gestion.Util.stringToDateTime(
                this.storeEstadoRegistrado.activo.fecha
            );
            this.usuario_activo_usuario =
                this.storeEstadoRegistrado.activo.usuario_id_txt;
            this.usuario_activo_texto = this.storeEstadoRegistrado.activo.texto;
            this.usuario_activo_estado = parseInt(
                this.storeEstadoRegistrado.activo.valor_estado
            );

            this.usuario_revisado_fecha = Cdr.Gestion.Util.stringToDateTime(
                this.storeEstadoRegistrado.revisado.fecha
            );
            this.usuario_revisado_usuario =
                this.storeEstadoRegistrado.revisado.usuario_id_txt;
            this.usuario_revisado_texto = this.storeEstadoRegistrado.revisado.texto;
            this.usuario_revisado_estado = parseInt(
                this.storeEstadoRegistrado.revisado.valor_estado
            );

            // detalle regalo
            if (this.storeEstadoRegistrado.detalleRegalo) {
                this.detalle_regalo_estado = parseInt(
                    this.storeEstadoRegistrado.detalleRegalo.valor_estado
                );
                this.detalle_regalo_fecha = Cdr.Gestion.Util.stringToDateTime(
                    this.storeEstadoRegistrado.detalleRegalo.fecha
                );
                this.detalle_regalo_usuario =
                    this.storeEstadoRegistrado.detalleRegalo.usuario_id_txt;
                this.detalle_regalo_texto =
                    this.storeEstadoRegistrado.detalleRegalo.texto;
            }

            // detalle regalo
            if (this.storeEstadoRegistrado.credito) {
                this.credito_estado = parseInt(
                    this.storeEstadoRegistrado.credito.valor_estado
                );
                this.credito_fecha = Cdr.Gestion.Util.stringToDateTime(
                    this.storeEstadoRegistrado.credito.fecha
                );
                this.credito_usuario =
                    this.storeEstadoRegistrado.credito.usuario_id_txt;
                this.credito_texto = this.storeEstadoRegistrado.credito.texto;
            }

            return this;
        }
    },

    // Recupera columna
    loadColumna2: function () {
        if (this.data) {
            this.mail_facturacion =
                this.data.empresaRegistradaGenerica.mail_facturacion;
            this.codigo_agencia = this.data.empresaRegistradaGenerica.codigo_agencia;
            return this;
        }
    },

    // Recupera columna
    loadColumna3: function () {
        if (this.data) {
            return this;
        }
    },

    // Recupera columna
    loadColumna4: function () {
        if (this.data) {
            return this;
        }
    },

    // Recupera columna
    loadColumna5: function () {
        if (this.data) {
            return this;
        }
    },

    // Recupera columna
    loadColumna6: function () {
        if (this.data) {
            this.dia_pago = this.data.empresaRegistradaGenerica.dia_pago;
            this.importe_credito =
                this.data.empresaRegistradaGenerica.limite_credito_importe;
            this.divisa_codigo_iso_credito =
                this.data.empresaRegistradaGenerica.limite_credito_divisa;
            this.fecha_alta_cubierto_credito = Date.parseDate(
                this.data.empresaRegistradaGenerica.fecha_alta_cubierto_credito,
                "Y-m-d"
            );

            return this;
        }
    },

    // Recupera columna
    loadColumna7: function () {
        if (this.data) {
            this.excluir_pd = this.data.excluir_pd;

            return this;
        }
    },

    // Recupera columna
    loadColumna8: function () {
        if (this.data) {
            this.nombre_logo = this.data.empresaRegistradaGenerica.nombre_logo;
            this.nombre_bono = this.data.empresaRegistradaGenerica.nombre_bono;
            this.direccion_bono = this.data.empresaRegistradaGenerica.direccion_bono;
            this.telefono_bono = this.data.empresaRegistradaGenerica.telefono_bono;
            this.mail_bono = this.data.empresaRegistradaGenerica.mail_bono;
            this.frase_contacto_bono =
                this.data.empresaRegistradaGenerica.frase_contacto_bono;
            this.incluir_qr_bono = parseInt(
                this.data.empresaRegistradaGenerica.incluir_qr_bono
            );
            this.bono_marcablanca = parseInt(
                this.data.empresaRegistradaGenerica.bono_marcablanca
            );
            this.logo_bono_id = this.logo_bono_id;
            this.formato_bono_id = this.formato_bono_id;
            this.formato_confirmacion_id = this.formato_confirmacion_id;
            return this;
        }
    },
};
