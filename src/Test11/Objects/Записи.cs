﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Test11
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Записи.
    /// </summary>
    // *** Start programmer edit section *** (Записи CustomAttributes)

    // *** End programmer edit section *** (Записи CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЗаписиE", new string[] {
            "КодЗаписи as \'Код записи\'",
            "Дата as \'Дата\'",
            "ВремНач as \'Врем нач\'",
            "ВремОкон as \'Врем окон\'",
            "Заявка as \'Заявка\'",
            "Регистр as \'Регистр\'"})]
    [View("ЗаписиL", new string[] {
            "КодЗаписи as \'Код записи\'",
            "Дата as \'Дата\'",
            "ВремНач as \'Врем нач\'",
            "ВремОкон as \'Врем окон\'",
            "Заявка as \'Заявка\'",
            "Регистр as \'Регистр\'"})]
    public class Записи : ICSSoft.STORMNET.DataObject
    {
        
        private string fКодЗаписи;
        
        private string fНомЗаяв;
        
        private System.DateTime fДата;
        
        private int fКодРегист;
        
        private string fВремНач;
        
        private string fВремОкон;
        
        private IIS.Test11.Заявка fЗаявка;
        
        private IIS.Test11.Регистр fРегистр;
        
        // *** Start programmer edit section *** (Записи CustomMembers)

        // *** End programmer edit section *** (Записи CustomMembers)

        
        /// <summary>
        /// ВремНач.
        /// </summary>
        // *** Start programmer edit section *** (Записи.ВремНач CustomAttributes)

        // *** End programmer edit section *** (Записи.ВремНач CustomAttributes)
        [StrLen(255)]
        public virtual string ВремНач
        {
            get
            {
                // *** Start programmer edit section *** (Записи.ВремНач Get start)

                // *** End programmer edit section *** (Записи.ВремНач Get start)
                string result = this.fВремНач;
                // *** Start programmer edit section *** (Записи.ВремНач Get end)

                // *** End programmer edit section *** (Записи.ВремНач Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Записи.ВремНач Set start)

                // *** End programmer edit section *** (Записи.ВремНач Set start)
                this.fВремНач = value;
                // *** Start programmer edit section *** (Записи.ВремНач Set end)

                // *** End programmer edit section *** (Записи.ВремНач Set end)
            }
        }
        
        /// <summary>
        /// ВремОкон.
        /// </summary>
        // *** Start programmer edit section *** (Записи.ВремОкон CustomAttributes)

        // *** End programmer edit section *** (Записи.ВремОкон CustomAttributes)
        [StrLen(255)]
        public virtual string ВремОкон
        {
            get
            {
                // *** Start programmer edit section *** (Записи.ВремОкон Get start)

                // *** End programmer edit section *** (Записи.ВремОкон Get start)
                string result = this.fВремОкон;
                // *** Start programmer edit section *** (Записи.ВремОкон Get end)

                // *** End programmer edit section *** (Записи.ВремОкон Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Записи.ВремОкон Set start)

                // *** End programmer edit section *** (Записи.ВремОкон Set start)
                this.fВремОкон = value;
                // *** Start programmer edit section *** (Записи.ВремОкон Set end)

                // *** End programmer edit section *** (Записи.ВремОкон Set end)
            }
        }
        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (Записи.Дата CustomAttributes)

        // *** End programmer edit section *** (Записи.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (Записи.Дата Get start)

                // *** End programmer edit section *** (Записи.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (Записи.Дата Get end)

                // *** End programmer edit section *** (Записи.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Записи.Дата Set start)

                // *** End programmer edit section *** (Записи.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (Записи.Дата Set end)

                // *** End programmer edit section *** (Записи.Дата Set end)
            }
        }
        
        /// <summary>
        /// КодЗаписи.
        /// </summary>
        // *** Start programmer edit section *** (Записи.КодЗаписи CustomAttributes)

        // *** End programmer edit section *** (Записи.КодЗаписи CustomAttributes)
        [StrLen(255)]
        public virtual string КодЗаписи
        {
            get
            {
                // *** Start programmer edit section *** (Записи.КодЗаписи Get start)

                // *** End programmer edit section *** (Записи.КодЗаписи Get start)
                string result = this.fКодЗаписи;
                // *** Start programmer edit section *** (Записи.КодЗаписи Get end)

                // *** End programmer edit section *** (Записи.КодЗаписи Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Записи.КодЗаписи Set start)

                // *** End programmer edit section *** (Записи.КодЗаписи Set start)
                this.fКодЗаписи = value;
                // *** Start programmer edit section *** (Записи.КодЗаписи Set end)

                // *** End programmer edit section *** (Записи.КодЗаписи Set end)
            }
        }
        
        /// <summary>
        /// КодРегист.
        /// </summary>
        // *** Start programmer edit section *** (Записи.КодРегист CustomAttributes)

        // *** End programmer edit section *** (Записи.КодРегист CustomAttributes)
        public virtual int КодРегист
        {
            get
            {
                // *** Start programmer edit section *** (Записи.КодРегист Get start)

                // *** End programmer edit section *** (Записи.КодРегист Get start)
                int result = this.fКодРегист;
                // *** Start programmer edit section *** (Записи.КодРегист Get end)

                // *** End programmer edit section *** (Записи.КодРегист Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Записи.КодРегист Set start)

                // *** End programmer edit section *** (Записи.КодРегист Set start)
                this.fКодРегист = value;
                // *** Start programmer edit section *** (Записи.КодРегист Set end)

                // *** End programmer edit section *** (Записи.КодРегист Set end)
            }
        }
        
        /// <summary>
        /// НомЗаяв.
        /// </summary>
        // *** Start programmer edit section *** (Записи.НомЗаяв CustomAttributes)

        // *** End programmer edit section *** (Записи.НомЗаяв CustomAttributes)
        [StrLen(255)]
        public virtual string НомЗаяв
        {
            get
            {
                // *** Start programmer edit section *** (Записи.НомЗаяв Get start)

                // *** End programmer edit section *** (Записи.НомЗаяв Get start)
                string result = this.fНомЗаяв;
                // *** Start programmer edit section *** (Записи.НомЗаяв Get end)

                // *** End programmer edit section *** (Записи.НомЗаяв Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Записи.НомЗаяв Set start)

                // *** End programmer edit section *** (Записи.НомЗаяв Set start)
                this.fНомЗаяв = value;
                // *** Start programmer edit section *** (Записи.НомЗаяв Set end)

                // *** End programmer edit section *** (Записи.НомЗаяв Set end)
            }
        }
        
        /// <summary>
        /// Записи.
        /// </summary>
        // *** Start programmer edit section *** (Записи.Заявка CustomAttributes)

        // *** End programmer edit section *** (Записи.Заявка CustomAttributes)
        [PropertyStorage(new string[] {
                "Заявка"})]
        [NotNull()]
        public virtual IIS.Test11.Заявка Заявка
        {
            get
            {
                // *** Start programmer edit section *** (Записи.Заявка Get start)

                // *** End programmer edit section *** (Записи.Заявка Get start)
                IIS.Test11.Заявка result = this.fЗаявка;
                // *** Start programmer edit section *** (Записи.Заявка Get end)

                // *** End programmer edit section *** (Записи.Заявка Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Записи.Заявка Set start)

                // *** End programmer edit section *** (Записи.Заявка Set start)
                this.fЗаявка = value;
                // *** Start programmer edit section *** (Записи.Заявка Set end)

                // *** End programmer edit section *** (Записи.Заявка Set end)
            }
        }
        
        /// <summary>
        /// Записи.
        /// </summary>
        // *** Start programmer edit section *** (Записи.Регистр CustomAttributes)

        // *** End programmer edit section *** (Записи.Регистр CustomAttributes)
        [PropertyStorage(new string[] {
                "Регистр"})]
        [NotNull()]
        public virtual IIS.Test11.Регистр Регистр
        {
            get
            {
                // *** Start programmer edit section *** (Записи.Регистр Get start)

                // *** End programmer edit section *** (Записи.Регистр Get start)
                IIS.Test11.Регистр result = this.fРегистр;
                // *** Start programmer edit section *** (Записи.Регистр Get end)

                // *** End programmer edit section *** (Записи.Регистр Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Записи.Регистр Set start)

                // *** End programmer edit section *** (Записи.Регистр Set start)
                this.fРегистр = value;
                // *** Start programmer edit section *** (Записи.Регистр Set end)

                // *** End programmer edit section *** (Записи.Регистр Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЗаписиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаписиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаписиE", typeof(IIS.Test11.Записи));
                }
            }
            
            /// <summary>
            /// "ЗаписиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаписиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаписиL", typeof(IIS.Test11.Записи));
                }
            }
        }
    }
}
