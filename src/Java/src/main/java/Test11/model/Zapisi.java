package Test11.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Test11.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Записи
 */
@Entity(name = "IISTest11Записи")
@Table(schema = "public", name = "Записи")
public class Zapisi {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодЗаписи")
    private String кодзаписи;

    @Column(name = "НомЗаяв")
    private String номзаяв;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "КодРегист")
    private Integer кодрегист;

    @Column(name = "ВремНач")
    private String времнач;

    @Column(name = "ВремОкон")
    private String времокон;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Zayavka")
    @Convert("Zayavka")
    @Column(name = "Заявка", length = 16, unique = true, nullable = false)
    private UUID _zayavkaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Zayavka", insertable = false, updatable = false)
    private Zayavka zayavka;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Registr")
    @Convert("Registr")
    @Column(name = "Регистр", length = 16, unique = true, nullable = false)
    private UUID _registrid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Registr", insertable = false, updatable = false)
    private Registr registr;


    public Zapisi() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getКодЗаписи() {
      return кодзаписи;
    }

    public void setКодЗаписи(String кодзаписи) {
      this.кодзаписи = кодзаписи;
    }

    public String getНомЗаяв() {
      return номзаяв;
    }

    public void setНомЗаяв(String номзаяв) {
      this.номзаяв = номзаяв;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public Integer getКодРегист() {
      return кодрегист;
    }

    public void setКодРегист(Integer кодрегист) {
      this.кодрегист = кодрегист;
    }

    public String getВремНач() {
      return времнач;
    }

    public void setВремНач(String времнач) {
      this.времнач = времнач;
    }

    public String getВремОкон() {
      return времокон;
    }

    public void setВремОкон(String времокон) {
      this.времокон = времокон;
    }


}