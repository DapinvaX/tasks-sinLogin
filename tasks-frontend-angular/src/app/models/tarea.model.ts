export interface Tarea {
  id?: number;
  titulo: string;
  descripcion?: string;
  fecha_creacion?: Date;
  fecha_fin?: Date;
  completada: boolean;
}
