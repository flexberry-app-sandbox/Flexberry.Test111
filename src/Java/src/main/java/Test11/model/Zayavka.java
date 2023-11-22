package Test11.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Test11.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Заявка
 */
@Entity(name = "IISTest11Заявка")
@Table(schema = "public", name = "Заявка")
public class Zayavka {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Текст")
    private String текст;

    @Column(name = "Состоян")
    private String состоян;

    @Column(name = "Важност")
    private String важност;

    @Column(name = "НомЗаяв")
    private String номзаяв;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Kontragent")
    @Convert("Kontragent")
    @Column(name = "Контрагент", length = 16, unique = true, nullable = false)
    private UUID _kontragentid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Kontragent", insertable = false, updatable = false)
    private Kontragent kontragent;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudnik")
    @Convert("Sotrudnik")
    @Column(name = "Сотрудник", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudnik", insertable = false, updatable = false)
    private Sotrudnik sotrudnik;


    public Zayavka() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getТекст() {
      return текст;
    }

    public void setТекст(String текст) {
      this.текст = текст;
    }

    public String getСостоян() {
      return состоян;
    }

    public void setСостоян(String состоян) {
      this.состоян = состоян;
    }

    public String getВажност() {
      return важност;
    }

    public void setВажност(String важност) {
      this.важност = важност;
    }

    public String getНомЗаяв() {
      return номзаяв;
    }

    public void setНомЗаяв(String номзаяв) {
      this.номзаяв = номзаяв;
    }


}